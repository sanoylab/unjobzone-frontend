
function Footer() {
  return (
   
    <footer className="rts__section pt-80 footer__home__six">
    <div className="container">
        <div className="rts__footer__newsletter d-flex flex-wrap flex-lg-nowrap gap-5 justify-content-center justify-content-lg-between align-items-center pb-60">
            <div className="text-center text-lg-start mb-md-0">
                <h3 className=" mb-2 wow animated fadeInUp">Subscribe To Get Our  Newsletter</h3>
                <p className=" wow animated fadeInUp">Looking for your next career opportunity. Look no further</p>
            </div>
            <div className="footer__newsletter__three  wow animated fadeIn">
                <form action="#" method="post" className="d-flex">
                    <input type="email" name="semail" id="semail" placeholder="Enter your email" required="" />
                    <button type="submit" className="rts__btn fill__btn he-3 newsletter__btn">Subscribe</button>
                </form>
            </div>
        </div>
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
    </div>
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
    <a href="https://facebook.com"  aria-label="facebook">
        <i className="fa-brands fa-facebook"></i>
    </a>
    <a href="https://instagram.com"  aria-label="instagram">
        <i className="fa-brands fa-instagram"></i>
    </a>
    <a href="https://linkedin.com"  aria-label="linkedin">
        <i className="fa-brands fa-linkedin"></i>
    </a>
    <a href="https://pinterest.com"  aria-label="pinterest">
        <i className="fa-brands fa-pinterest"></i>
    </a>
    <a href="https://youtube.com"  aria-label="youtube">
        <i className="fa-brands fa-youtube"></i>
    </a>
</div>

                        <p>Copyright &copy; 2024 All Rights Reserved by jobpath</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>  
  )
}

export default Footer