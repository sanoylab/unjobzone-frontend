
const Advertisment = () => {
  return (
    <div className="rts__section section__padding about__section__bg">
    <div className="container">
        <div className="row align-items-center g-5">
            <div className="col-lg-6">
                <div className="rts__content__section">
                    <h3 className="fw-bold l--3 mb-4  wow animated fadeInUp">1000+ Jobs in UN Job Zone Find The One That Best Match You</h3>
                    <p className=" wow animated fadeInUp">Whether you're an experienced professional or a fresh graduate eager to dive into the workforce, we have something for everyone. From tech wizards to marketing mavens</p>
                    <div className="mt-40 rts__listing style__six  wow animated fadeInUp">
                        <div className="single__listing d-flex align-items-center gap-4">
                            <span className="icon">
                                <i className="fa-regular fa-check"></i> 
                            </span>
                            <span>Quality Job</span>
                        </div>
                        <div className="single__listing d-flex align-items-center gap-4">
                            <span className="icon">
                                <i className="fa-regular fa-check"></i> 
                            </span>
                            <span>Reach 100s contacts</span>
                        </div>
                        <div className="single__listing d-flex align-items-center gap-4">
                            <span className="icon">
                                <i className="fa-regular fa-check"></i> 
                            </span>
                            <span>No Extra Charge</span>
                        </div>
                        <div className="single__listing d-flex align-items-center gap-4">
                            <span className="icon">
                                <i className="fa-regular fa-check"></i> 
                            </span>
                            <span>Internation job</span>
                        </div>
                    </div>
                    <a href="contact-2.html" className="rts__btn common__btn he-3 fill__btn mt-50">Read More <i className="fa-regular fa-arrow-right"></i></a>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="about__image__section position-relative flex-wrap flex-sm-nowrap d-flex justify-content-between gap-5">
                    <div className="shape__image d-none d-lg-block">
                        <img src="/src/assets/img/home-6/about/shape.svg" alt="" />
                    </div>
                    <div className="about__image__one align-self-end">
                        <figure>
                            <img src="/src/assets/img/home-6/about/1.webp" alt="" />
                        </figure>
                    </div>
                    <div className="about__applicant">
                        <div className="rts__applicants">
                            <span className="font-20 mb-3 d-block fw-medium">Applicants</span>
                            <div className="applicant__list">
                                <div className="single__list">
                                    <img src="/src/assets/img/author/1.svg" alt="" />
                                </div>
                                <div className="single__list">
                                    <img src="/src/assets/img/author/2.svg" alt="" />
                                </div>
                                <div className="single__list">
                                    <img src="/src/assets/img/author/3.svg" alt="" />
                                </div>
                                <div className="single__list">
                                    <img src="/src/assets/img/author/4.svg" alt="" />
                                    <div className="icon-plus"><i className="fa-sharp fa-solid fa-plus"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about__image__two align-self-start">
                        <figure>
                            <img src="/src/assets/img/home-6/about/2.webp" alt="" />
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