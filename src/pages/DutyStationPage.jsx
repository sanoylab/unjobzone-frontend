import React from 'react'
import Hero from "../components/Hero";
import DutyStation from "../components/DutyStation";

function DutyStationPage() {
  return (
    <div>
      <Hero title="Duty Stations" />
      <div className="rts__section mb-40" style={{ paddingTop: '60px' }}>
                <div className="container">
          <div className="row g-30 ">
            <div className="row">
           <DutyStation /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DutyStationPage