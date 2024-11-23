import React, { useEffect, useState } from 'react';
import { marked } from 'marked';

import JobCategory from './JobCategory';
import { getRecentJobListings } from '../Api'

import ThumbnailJob from './ThumbnailJob';

function FeaturedJobs() {

  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    async function fetchJobListings() {
      try {
        const jobs = await getRecentJobListings();

        if (Array.isArray(jobs)) {
          setJobListings(jobs);
        } else {
          console.error('Expected an array but got:', jobs);
        }
      } catch (error) {
        console.error('Error fetching job categories:', error);
      }
    }

    fetchJobListings();
  }, []);


  return (
    <div className="rts__section pb-120 overflow-hidden">
    <div className="container">
        <div className="row justify-content-center mb-50 position-relative mtn-1">
            <div className="col-lg-6">
                <div className="rts__section__content wow animated fadeInUp text-center">
                    <h3 className="rts__section__title mb-3">There Are More Then 1000+ Jobs in UN JobZone</h3>
                    <p className="rts__section__desc">From entry-level positions to senior roles browse through.</p>
                </div>
            </div>
            
        </div>
        <div className="row g-30">

          {jobListings.map((job) => (
            <ThumbnailJob key = {job.id}           
            end_date = {job.end_date}
            duty_station = {job.duty_station}
            recruitment_type = {job.recruitment_type}
            job_title = {job.job_title}
            dept = {job.dept}
            />
          ))}
                
                
                 

                 
        </div>
    </div>
</div>
  )
}
export default FeaturedJobs