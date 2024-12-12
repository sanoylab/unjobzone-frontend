import SocialShare from "./SocialShare"
function Footer() {
  return (
   
    <footer className="rts__section pt-80 footer__home__six">
    {/* <div className="container">
        
        <div className="row">
            <div className="footer__wrapper d-flex flex-wrap gap-3 gap-md-5 justify-content-between pb-60">
                
                 <div className="rts__footer__widget max-content">
                    <div className="h6 fw-semibold mb-3 h6 lh-1">Pages</div>
                    <ul className="list-unstyled">
                        <li><a href="#" aria-label="footer__menu__link">Home</a></li>
                        <li><a href="#" aria-label="footer__menu__link">About Us</a></li>
                        <li><a href="#" aria-label="footer__menu__link">Employer</a></li>
                        <li><a href="#" aria-label="footer__menu__link">Candidates</a></li>
                        <li><a href="#" aria-label="footer__menu__link">Blog</a></li>
                    </ul>
                 </div>
                 
                
                 <div className="rts__footer__widget max-content">
                    <div className="h6 fw-semibold mb-3 h6 lh-1">Resource</div>
                    <ul className="list-unstyled">
                        <li><a href="#" aria-label="footer__menu__link">Faq</a></li>
                        <li><a href="#" aria-label="footer__menu__link">Review</a></li>
                        <li><a href="#" aria-label="footer__menu__link">Contact</a></li>
                        <li><a href="#" aria-label="footer__menu__link">Career</a></li>
                    </ul>
                 </div>
                 
                
                 <div className="rts__footer__widget max-content">
                    <div className="h6 fw-semibold mb-3 h6 lh-1">Links</div>
                    <ul className="list-unstyled">
                        <li><a href="#" aria-label="footer__menu__link">Browse Jobs</a></li>
                        <li><a href="#" aria-label="footer__menu__link">Browse Candidates</a></li>
                        <li><a href="#" aria-label="footer__menu__link">Blog & News</a></li>
                        <li><a href="#" aria-label="footer__menu__link">FAQ Question</a></li>
                        <li><a href="#" aria-label="footer__menu__link">Job Alerts</a></li>
                    </ul>
                 </div>
                 

                 
                  <div className="rts__footer__widget max-360">
                    <div className="h6 fw-semibold mb-3 h6 lh-1">Download The App</div>
                    <p>Looking for your next career opportunity. Look no further</p>
                   <div className="d-flex flex-wrap gap-3 align-items-center mt-4 app__icon">
                    <a href="#" aria-label="footer__menu__link">
                        <img src="src/assets/img/icon/playstore-black.svg" alt="" />
                    </a>
                    <a href="#" aria-label="footer__menu__link">
                        <img src="src/assets/img/icon/playstore-two.svg" alt="" />
                    </a>
                   </div>
                  </div>
                 

            </div>
        </div>
    </div> */}
    <div className="footer__bottom footer__six__copy border-top py-4 text-white">
        <div className="container">
            <div className="row g-30 align-items-center">
                <div className="col-lg-4 col-md-4">
                    <a href="#" className="footer__logo">
                        <h5>UN JobZone</h5>
                    </a>
                </div>
                <div className="col-lg-8 col-md-8">
                    <div className="d-flex justify-content-between flex-wrap flex-lg-nowrap gap-4 align-items-center">
                        <div className="rts__social d-flex gap-3 social__default">
                            <SocialShare />
   
</div>

                        <p>Copyright &copy; 2025 All Rights Reserved by UNJobZone</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>  
  )
}

export default Footer