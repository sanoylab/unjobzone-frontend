import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getJobOrganization } from "../Api";
import Spinner from "./Spinner";

const OrganizationLogoSlider = () => {
  const [organizations, setOrganizations] = useState([]);
  const [loading, setLoading] = useState(true);
  const APP_URL = import.meta.env.VITE_APP_URI;
  
  useEffect(() => {
    async function fetchOrganizations() {
      try {
        const organizations = await getJobOrganization();
        if (Array.isArray(organizations)) {
          setOrganizations(organizations);
        } else {
          console.error("Expected an array but got:", organizations);
        }
      } catch (error) {
        console.error("Error fetching job categories:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchOrganizations();
  }, []);
  
  return (
    <div className="rts__brand  wow animated fadeInUp  ">
        <div className="container">
          <div className="bg-white">
            <div className="row align-items-center">
              <div
                className="rts__brand__slider overflow-hidden swiper-data"
                data-swiper='{
                            "slidesPerView":7,
                            "loop": true,
                            "speed": 1000,
                            "autoplay":{
                                "delay":"7000"
                            },
            
                            "breakpoints": {
                                "0": {
                                    "slidesPerView": 2
                                },
                                "768": {
                                    "slidesPerView": 3
                                },
                                "1024": {
                                    "slidesPerView": 4
                                },
                                "1200": {
                                    "slidesPerView": 6
                                },
                                "1400": {
                                    "slidesPerView": 7
                                }
                            }
            
                        }'
              >
                <div className="swiper-wrapper">

                {organizations.map((org, index) => (
                  <div className="swiper-slide" key={index} style={{height: '50px'}}>
                    <div className="brand__item">

                      <Link to={`/jobs?dept=${encodeURIComponent(org.dept)}`} className="brand__item__link" aria-label="brand">
                        <img
                          src={`${APP_URL}/assets/logo/${org.logo}`}
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default OrganizationLogoSlider