import React from "react";
import Jobs from "../components/Jobs";
import Hero from "../components/Hero";

function JobsPage() {
  return (
    <div>
      <Hero title="Browse Jobs" />
      <div className="rts__section section__padding">
        <div className="container">
          <div className="row g-30">
            <div className="col-12"></div>
            <Jobs isHome={false} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobsPage;
