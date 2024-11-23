import React, { useEffect, useState } from 'react';
import { marked } from 'marked';

import { getAllJobs } from '../Api'

import ListJob from './ListJob';

function AllJobs() {

  const [allJobs, setAllJobs] = useState([]);

  useEffect(() => {
    async function fetchAllJobs() {
      try {
        const jobs = await getAllJobs();

        if (Array.isArray(jobs)) {
          setAllJobs(jobs);
        } else {
          console.error('Expected an array but got:', jobs);
        }
      } catch (error) {
        console.error('Error fetching job categories:', error);
      }
    }

    fetchAllJobs();
  }, []);


  return (

       
        <div className="row g-30">

          {allJobs.map((job) => (
            <ListJob key = {job.id}           
            end_date = {job.end_date}
            duty_station = {job.duty_station}
            recruitment_type = {job.recruitment_type}
            job_title = {job.job_title}
            dept = {job.dept}
            />
          ))}
                
                
                 

                 
        </div>

  )
}
export default AllJobs