import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getDutyStation }  from '../Api';

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
          console.error('Error fetching organizations:', error);
        
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


  return (
    <div className="rts__job__search form-2 z-1 position-relative mx-auto max-content mb-5 mb-lg-0  wow animated fadeInUp">
              <form
                action="#"
                className="d-flex align-items-center flex-wrap flex-md-nowrap  gap-4 justify-content-between"
                onSubmit={handleSubmit}
              >
                <div className="input-group flex-md-nowrap d-flex gap-4">
                  <div className="single__input d-flex flex-column">
                    <input type="text" placeholder="Enter a job title" onChange={(e) => setJobTitle(e.target.value)}/>
                    <div className="search__icon fa-light fa-magnifying-glass"></div>
                  </div>
                  <div className="single__input d-flex flex-column">
                    <div className="nice-select" tabIndex="0">
                    <select id="organization" name="duty_station" className="dropdown" onChange={(e) => setSelectedDutyStation(e.target.value)}>
                                        <option value="">Select Duty Station</option>
                                        {dutyStations.map((duty, index) => (
                                            <option key={index} value={duty.duty_station}>{duty.duty_station}</option>
                                        ))}
                                    </select>
                    </div>
                    <div className="fa-sharp fa-thin fa-location-dot location__icon"></div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="rts__btn he-3 fill__btn job__search "
                  aria-label="Search"
                >
                  Search Job
                </button>
              </form>
            </div>
  )
}

export default Search