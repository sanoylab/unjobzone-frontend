
const Advertisment = () => {
  return (
    <div className="rts__section section__padding about__section__bg">
    <div className="container">
        <div className="row align-items-center g-5">
            <div className="col-lg-6">
                <div className="rts__content__section">
                    <h3 className="fw-bold l--3 mb-4  wow animated fadeInUp">1000+ Jobs in UN Job Zone Find The One That Best Match You</h3>
                    <p className=" wow animated fadeInUp">Whether you're an experienced professional or a fresh graduate eager to make a difference, the United Nations offers opportunities for everyone. From humanitarian aid workers to policy analysts, your skills can contribute to global peace and development.</p>
                    <div className="mt-40 rts__listing style__six  wow animated fadeInUp">
                        <div className="single__listing d-flex align-items-center gap-4">
                            <span className="icon">
                                <i className="fa-regular fa-check"></i> 
                            </span>
                            <span>Make a global impact</span>
                        </div>
                        <div className="single__listing d-flex align-items-center gap-4">
                            <span className="icon">
                                <i className="fa-regular fa-check"></i> 
                            </span>
                            <span>Work with diverse teams</span>
                        </div>
                        <div className="single__listing d-flex align-items-center gap-4">
                            <span className="icon">
                                <i className="fa-regular fa-check"></i> 
                            </span>
                            <span>Access to continuous learning</span>
                        </div>
                        <div className="single__listing d-flex align-items-center gap-4">
                            <span className="icon">
                                <i className="fa-regular fa-check"></i> 
                            </span>
                            <span>Competitive benefits and compensation</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="about__image__section position-relative flex-wrap flex-sm-nowrap d-flex justify-content-between gap-5">
                    <div className="shape__image d-none d-lg-block">
                        <img src="../assets/img/home-6/about/shape.svg" alt="" />
                    </div>
                    <div className="about__image__one align-self-end">
                        <figure>
                            <img src="../assets/img/home-6/about/1.webp" alt="" />
                        </figure>
                    </div>
                   
                    <div className="about__image__two align-self-start">
                        <figure>
                            <img src="../assets/images/UN.jpg" alt="" />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Advertisment