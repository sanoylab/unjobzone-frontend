import React, { useEffect, useState } from "react";
import DutyStaionCard from "./DutyStationCard";
import { getDutyStation } from "../Api";
import Spinner from "./Spinner";

function DutyStation() {
  const [dutyStations, setDutyStations] = useState([]);

const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDutyStations() {
      try {
        const duty_stations = await getDutyStation();
        if (Array.isArray(duty_stations)) {
          setDutyStations(duty_stations);
        } else {
          console.error("Expected an array but got:", duty_stations);
        }
      } catch (error) {
        console.error("Error fetching job categories:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchDutyStations();
  }, []);

  return (
    <div className="rts__section overflow-hidden mb-120">
      <div className="container">
        <div className="row g-30">
          {loading ? (
            <>
              <Spinner loading={loading} />
            </>
          ) : (
            <>              
              {dutyStations.map((duty, index) => (
                <DutyStaionCard
                  key={index}
                  title={duty.duty_station}
                  
                  totalJobs={duty.total}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default DutyStation;
