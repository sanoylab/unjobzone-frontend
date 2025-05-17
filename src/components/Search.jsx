import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDutyStation } from '../Api';

function Search() {
  const [dutyStations, setDutyStations] = useState([]);
  const [jobTitle, setJobTitle] = useState('');
  const [selectedDutyStation, setSelectedDutyStation] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDutyStations = async () => {
      try {
        const response = await getDutyStation();
        setDutyStations(response);
      } catch (error) {
        console.error('Error fetching duty stations:', error);
      }
    };
    fetchDutyStations();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (jobTitle) params.append('job_title', jobTitle);
    if (selectedDutyStation) params.append('duty_station', selectedDutyStation);
    navigate(`/jobs?${params.toString()}`);
  };

  const customArrow = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%236B7280'%3E%3Cpath d='M8 10.75a.75.75 0 01-.53-.22l-3.25-3.25a.75.75 0 011.06-1.06L8 8.94l2.72-2.72a.75.75 0 111.06 1.06l-3.25 3.25a.75.75 0 01-.53.22z'/%3E%3C/svg%3E")`;

  return (
    <form onSubmit={handleSubmit} style={{
      display: 'flex',
      alignItems: 'center',
      background: '#FFFFFF',
      borderRadius: '2.5rem',
      boxShadow: '0 5px 15px rgba(30, 64, 175, 0.06)',
      padding: '0.5rem 0.75rem',
      gap: '0.5rem',
      width: '100%',
      minHeight: '52px',
      border: '1px solid #E5E9F2',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    }}>
      {/* Job Title Input Group */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '0.5rem', minWidth: 0, maxWidth: '200px' }}>
        <span className="fa-light fa-magnifying-glass" style={{ color: '#6B7280', fontSize: '0.95rem', marginLeft: '0.25rem' }}></span>
        <input
          type="text"
          placeholder="Job title..."
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          style={{
            border: 'none',
            outline: 'none',
            background: 'transparent',
            color: '#102A43',
            fontSize: '0.95rem',
            flex: 1,
            padding: '0.65rem 0.1rem',
            minWidth: '80px',
            maxWidth: '160px',
          }}
        />
      </div>

      {/* Subtle Separator */}
      <div style={{
        width: '1px',
        height: '20px',
        background: '#E5E9F2',
        margin: '0 0.25rem'
      }}></div>

      {/* Duty Station Select Group */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '0.5rem', minWidth: 0, maxWidth: '200px' }}>
        <span className="fa-sharp fa-thin fa-location-dot" style={{ color: '#6B7280', fontSize: '0.95rem', marginLeft: '0.25rem' }}></span>
        <select
          id="duty_station_select"
          name="duty_station"
          value={selectedDutyStation}
          onChange={(e) => setSelectedDutyStation(e.target.value)}
          style={{
            border: 'none',
            outline: 'none',
            background: `transparent ${customArrow} no-repeat right 0.75rem center`,
            backgroundSize: '14px 14px',
            color: '#102A43',
            fontSize: '0.95rem',
            flex: 1,
            padding: '0.65rem 2rem 0.65rem 0.1rem',
            minWidth: '100px',
            maxWidth: '160px',
            cursor: 'pointer',
            appearance: 'none',
            WebkitAppearance: 'none',
            MozAppearance: 'none',
          }}
        >
          <option value="">Duty station...</option>
          {dutyStations.map((duty, index) => (
            <option key={index} value={duty.duty_station}>{duty.duty_station}</option>
          ))}
        </select>
      </div>

      {/* Search Button */}
      <button
        type="submit"
        aria-label="Search Jobs"
        style={{
          background: '#1B4B82',
          color: '#FFFFFF',
          border: 'none',
          borderRadius: '2rem',
          padding: '0.55rem 1.2rem',
          fontWeight: 500,
          fontSize: '0.95rem',
          cursor: 'pointer',
          transition: 'background-color 0.2s ease, box-shadow 0.2s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          whiteSpace: 'nowrap',
          boxShadow: '0 2px 6px rgba(27, 75, 130, 0.1)',
          minWidth: '100px',
        }}
        onMouseOver={e => {
          e.currentTarget.style.background = '#2962FF';
          e.currentTarget.style.boxShadow = '0 4px 10px rgba(30, 64, 175, 0.15)';
        }}
        onMouseOut={e => {
          e.currentTarget.style.background = '#1B4B82';
          e.currentTarget.style.boxShadow = '0 2px 6px rgba(27, 75, 130, 0.1)';
        }}
      >
        Search
      </button>
    </form>
  );
}

export default Search;