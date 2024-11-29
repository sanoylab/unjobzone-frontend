import React from "react";
import Jobs from "../components/Jobs";
import Hero from "../components/Hero";
import AdvancedSearch from "../components/AdvancedSearch";

function JobsPage({ duty_station, dept, recruitement_type, start_date, end_date, jn, jf, jc, jl }) {
  return (
    <div>
      <Hero title="Browse Jobs" />
      <AdvancedSearch />
      <div className="rts__section mb-40">
        <div className="container">
          <div className="row g-30">
            <div className="col-12"></div>
            <Jobs
              isHome={false}
              duty_station={duty_station}
              dept={dept}
              recruitement_type={recruitement_type}
              start_date={start_date}
              end_date={end_date}
              jn={jn}
              jf={jf}
              jc={jc}
              jl={jl}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobsPage;