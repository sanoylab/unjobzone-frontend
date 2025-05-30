import React, { useContext } from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from "../contexts/ThemeContext";
import { getJobOrganization, getJobCategories, getDutyStation }  from '../Api';

function AdvancedSearch() {
  const { darkMode } = useContext(ThemeContext);
  const [organizations, setOrganizations] = useState([]);
  const [jobCategories, setJobCategories] = useState([]);
  const [dutyStations, setDutyStations] = useState([]);

  const [selectedOrg, setSelectedOrg] = useState('');
  const [selectedJobCategory, setSelectedJobCategory] = useState('');
  const [selectedDutyStation, setSelectedDutyStation] = useState('');
  const [jobTitle, setJobTitle] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrganizations = async () => {
        try {
            const response = await getJobOrganization();
            setOrganizations(response);
        } catch (error) {
            console.error('Error fetching organizations:', error);
        }
    };
    const fetchJobCategories = async () => {
      try {
        const response = await getJobCategories();
        setJobCategories(response);
      } catch (error) {
          console.error('Error fetching job categories:', error);
      }
    };
    const fetchDutyStations = async () => {
      try {
        const response = await getDutyStation();
        setDutyStations(response);
      } catch (error) {
          console.error('Error fetching duty stations:', error);
      }
    };

    fetchOrganizations();
    fetchJobCategories();
    fetchDutyStations();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (jobTitle) params.append('job_title', jobTitle);
    if (selectedJobCategory) params.append('jn', selectedJobCategory);
    if (selectedDutyStation) params.append('duty_station', selectedDutyStation);
    if (selectedOrg) params.append('dept', selectedOrg);
    navigate(`/jobs?${params.toString()}`);
  };

  // Common styles for form elements
  const formGroupStyle = {
    position: 'relative',
    flex: '1 1 200px',
    minWidth: '200px',
    marginBottom: '0'
  };

  const iconStyle = {
    position: 'absolute',
    left: '16px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: darkMode ? '#4b90d6' : '#3182CE',
    fontSize: '14px',
    zIndex: 2,
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '16px',
    height: '16px'
  };

  const inputStyle = {
    width: '100%',
    height: '48px',
    padding: '8px 16px 8px 44px',
    fontSize: '14px',
    borderRadius: '8px',
    border: darkMode ? '1px solid #444' : '1px solid #E2E8F0',
    color: darkMode ? '#e4e4e4' : '#4A5568',
    backgroundColor: darkMode ? '#2d2d2d' : '#FFFFFF',
    transition: 'all 0.2s ease',
    outline: 'none',
    boxSizing: 'border-box'
  };

  const selectStyle = {
    ...inputStyle,
    appearance: 'none',
    backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 16px top 50%',
    backgroundSize: '12px auto',
    paddingRight: '40px'
  };

  const buttonStyle = {
    padding: '12px 24px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#FFFFFF',
    backgroundColor: darkMode ? '#1f3a60' : '#3182CE',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: darkMode ? '0 2px 4px rgba(0, 0, 0, 0.3)' : '0 2px 4px rgba(49, 130, 206, 0.2)',
    height: '48px',
    flex: '0 0 auto',
    whiteSpace: 'nowrap'
  };

  return (
    <div className="advanced-search-section" style={{ 
      marginTop: '-10px', 
      marginBottom: '40px',
      position: 'relative',
      zIndex: 5 
    }}>
      <div className="container">
        <div className="row">
          <div className="advanced-search-card" style={{
            backgroundColor: darkMode ? '#1f1f1f' : '#FFFFFF',
            borderRadius: '12px',
            boxShadow: darkMode ? '0 4px 20px rgba(0,0,0,0.2)' : '0 4px 20px rgba(0,0,0,0.08)',
            padding: '24px',
            position: 'relative',
            zIndex: 10,
            border: darkMode ? '1px solid rgba(80, 80, 80, 0.3)' : '1px solid rgba(226, 232, 240, 0.8)',
          }}>
            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              {/* Job Title Search */}
              <div style={formGroupStyle}>
                <i className="fa-light fa-magnifying-glass" style={iconStyle}></i>
                <input 
                  type="text" 
                  name="job_title" 
                  placeholder="Enter job title" 
                  onChange={(e) => setJobTitle(e.target.value)} 
                  style={inputStyle}
                />
              </div>
              
              {/* Organization Select */}
              <div style={formGroupStyle}>
                <i className="fa-light fa-briefcase" style={iconStyle}></i>
                <select 
                  name="dept" 
                  onChange={(e) => setSelectedOrg(e.target.value)}
                  style={selectStyle}
                >
                  <option value="">Select Organization</option>
                  {organizations.map((org, index) => (
                    <option key={index} value={org.dep}>{org.dept}</option>
                  ))}
                </select>
              </div>
              
              {/* Job Category Select */}
              <div style={formGroupStyle}>
                <i className="fa-light fa-briefcase" style={iconStyle}></i>
                <select 
                  name="jn" 
                  onChange={(e) => setSelectedJobCategory(e.target.value)}
                  style={selectStyle}
                >
                  <option value="">Select Job Category</option>
                  {jobCategories.map((category, index) => (
                    <option key={index} value={category.jn}>{category.jn}</option>
                  ))}
                </select>
              </div>
              
              {/* Duty Station Select */}
              <div style={formGroupStyle}>
                <i className="fa-light fa-location-dot" style={iconStyle}></i>
                <select 
                  name="duty_station" 
                  onChange={(e) => setSelectedDutyStation(e.target.value)}
                  style={selectStyle}
                >
                  <option value="">Select Duty Station</option>
                  {dutyStations.map((duty, index) => (
                    <option key={index} value={duty.duty_station}>{duty.duty_station}</option>
                  ))}
                </select>
              </div>
              
              {/* Search Button */}
              <button type="submit" style={buttonStyle}>
                Search Job
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdvancedSearch