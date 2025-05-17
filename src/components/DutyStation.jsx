import React, { useEffect, useState, useMemo } from "react";
import DutyStationCard from "./DutyStationCard";
import { getDutyStation } from "../Api";
import Spinner from "./Spinner";

// Predefined region categories
const regions = [
  { id: 'all', name: 'All Regions' },
  { id: 'africa', name: 'Africa' },
  { id: 'asia', name: 'Asia' },
  { id: 'europe', name: 'Europe' },
  { id: 'north-america', name: 'North America' },
  { id: 'latin-america', name: 'Latin America' },
  { id: 'middle-east', name: 'Middle East' },
  { id: 'oceania', name: 'Oceania' }
];

// Helper function to determine region based on duty station name
const getRegion = (dutyStationName) => {
  const regionMapping = {
    'africa': ['Nairobi', 'Cairo', 'Addis Ababa', 'Dakar', 'Lagos', 'Accra', 'Johannesburg', 'Khartoum', 'Abidjan'],
    'asia': ['Bangkok', 'Beijing', 'Tokyo', 'Delhi', 'Jakarta', 'Seoul', 'Manila', 'Hanoi', 'Singapore', 'Kathmandu'],
    'europe': ['Geneva', 'Rome', 'Vienna', 'Paris', 'Brussels', 'London', 'Copenhagen', 'Madrid', 'Budapest', 'Bonn'],
    'north-america': ['New York', 'Washington', 'Montreal', 'Toronto', 'San Francisco', 'Ottawa'],
    'latin-america': ['Santiago', 'Lima', 'Mexico', 'Bogota', 'Brasilia', 'Buenos Aires', 'Panama'],
    'middle-east': ['Amman', 'Beirut', 'Jerusalem', 'Dubai', 'Riyadh', 'Baghdad'],
    'oceania': ['Sydney', 'Melbourne', 'Wellington', 'Canberra', 'Fiji', 'Samoa']
  };

  for (const [regionId, cities] of Object.entries(regionMapping)) {
    for (const city of cities) {
      if (dutyStationName.includes(city)) {
        return regionId;
      }
    }
  }
  
  return 'all'; // Default region
};

function DutyStation() {
  const [dutyStations, setDutyStations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [totalPositions, setTotalPositions] = useState(0);

  useEffect(() => {
    async function fetchDutyStations() {
      try {
        const duty_stations = await getDutyStation();
        if (Array.isArray(duty_stations)) {
          setDutyStations(duty_stations);
          
          // Calculate total positions
          const total = duty_stations.reduce((sum, station) => sum + station.total, 0);
          setTotalPositions(total);
        } else {
          console.error("Expected an array but got:", duty_stations);
        }
      } catch (error) {
        console.error("Error fetching duty stations:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchDutyStations();
  }, []);

  // Filter duty stations based on search query and selected region
  const filteredStations = useMemo(() => {
    return dutyStations.filter(station => {
      // Filter by search query
      const matchesSearch = searchQuery === '' || 
        station.duty_station.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Filter by region
      const stationRegion = getRegion(station.duty_station);
      const matchesRegion = selectedRegion === 'all' || stationRegion === selectedRegion;
      
      return matchesSearch && matchesRegion;
    });
  }, [dutyStations, searchQuery, selectedRegion]);

  // Count stations by region
  const regionCounts = useMemo(() => {
    const counts = { all: dutyStations.length };
    
    dutyStations.forEach(station => {
      const region = getRegion(station.duty_station);
      if (!counts[region]) counts[region] = 0;
      counts[region]++;
    });
    
    return counts;
  }, [dutyStations]);

  if (loading) {
    return <Spinner loading={loading} />;
  }

  return (
    <div className="duty-station-component">
      <div className="controls-card">
        <div className="row align-items-center">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control search-input"
              placeholder="Search duty stations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search"
            />
          </div>
          <div className="col-md-6">
            <div className="region-filters">
              {regions.map((region) => (
                <button
                  key={region.id}
                  className={`region-filter ${selectedRegion === region.id ? 'active' : ''}`}
                  onClick={() => setSelectedRegion(region.id)}
                >
                  {region.name}
                  {regionCounts[region.id] > 0 && (
                    <span className="ms-1">({regionCounts[region.id] || 0})</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {filteredStations.length === 0 ? (
        <div className="no-results">
          <i className="fa-solid fa-search"></i>
          <h3>No duty stations found</h3>
          <p>Try adjusting your search or filter criteria</p>
        </div>
      ) : (
        <div className="stations-grid">
          <div className="row">
            {filteredStations.map((station, index) => (
              <DutyStationCard
                key={index}
                title={station.duty_station}
                totalJobs={station.total}
                index={index}
              />
            ))}
          </div>
          
          <div className="row mt-4">
            <div className="col-12 text-center">
              <p className="text-muted">
                Showing {filteredStations.length} of {dutyStations.length} duty stations
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DutyStation;
