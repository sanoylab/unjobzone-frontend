import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getJobOrganization, getJobCategories, getDutyStation }  from '../Api';

function AdvancedSearch() {
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
          console.error('Error fetching organizations:', error);
        
      }

    };
    const fetchDutyStations = async () => {
      try {
        const response = await getDutyStation();
        setDutyStations(response);

        
      } catch (error) {
          console.error('Error fetching organizations:', error);
        
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

  return (
    <div className="rts__section">
    <div className="container">
        <div className="row">
            <div className="advance__search__bg">
                <form action="#" className="advance__search__form" onSubmit={handleSubmit}>
                    <div className="search__item">
                        <div className="position-relative">
                            <input type="text" name="job_title" placeholder="Enter job title" onChange={(e) => setJobTitle(e.target.value)} />
                            <i className="fa-light fa-magnifying-glass"></i>
                        </div>
                    </div>
                   
                    <div className="search__item">
                        <div className="position-relative d-flex">
                        <i className="fa-light fa-briefcase"></i>
                        <div className="nice-select" tabIndex="0">
                                <select id="organization" name="dept" className="dropdown" onChange={(e) => setSelectedOrg(e.target.value)}>
                                        <option value="">Select Organization</option>
                                        {organizations.map((org, index) => (
                                            <option key={index} value={org.dep}>{org.dept}</option>
                                        ))}
                                    </select>
                            </div>
                           
                        </div>
                    </div>
                   
                    <div className="search__item">
                        <div className="position-relative d-flex">
                            <i className="fa-light fa-briefcase"></i>
                            <div className="nice-select" tabIndex="0">
                            <select id="organization" name="jn" className="dropdown" onChange={(e) => setSelectedJobCategory(e.target.value)}>
                                        <option value="">Select Job Category</option>
                                        {jobCategories.map((category, index) => (
                                            <option key={index} value={category.jn}>{category.jn}</option>
                                        ))}
                                    </select>
                            </div>
                        </div>
                    </div>
                   
                    <div className="search__item">
                        <div className="position-relative d-flex">
                        <i className="fa-light fa-location-dot"></i>
                        <div className="nice-select" tabIndex="0">
                            <select id="organization" name="duty_station" className="dropdown" onChange={(e) => setSelectedDutyStation(e.target.value)}>
                                        <option value="">Select Duty Station</option>
                                        {dutyStations.map((duty, index) => (
                                            <option key={index} value={duty.duty_station}>{duty.duty_station}</option>
                                        ))}
                                    </select>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="rts__btn fill__btn be-1 job__search">Search Job</button>
                </form>
            </div>
        </div>
    </div>
 </div>
  )
}

export default AdvancedSearch