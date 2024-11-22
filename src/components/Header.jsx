
function Header() {
  return (
    <header className="rts__section rts__header relative__header">
    <div className="container-none">
      <div className="rts__menu__background">
        <div className="row">
          <div className="d-flex align-items-center justify-content-between">
            <div className="rts__logo">
              <h5>
                UN JobZone
              </h5>
            </div>
            <div className="navigation d-none d-lg-block">
              <nav className="navigation__menu" id="offcanvas__menu">
                <ul className="list-unstyled">
                  <li className="navigation__menu--item">
                    <a href="#" className="navigation__menu--item__link">
                      Home
                    </a>
                  </li>
                  <li className="navigation__menu--item">
                    <a href="#" className="navigation__menu--item__link">
                      Jobs
                    </a>
                  </li>
                  <li className="navigation__menu--item">
                    <a href="#" className="navigation__menu--item__link">
                      Organizations
                    </a>
                  </li>
                  <li className="navigation__menu--item">
                    <a href="#" className="navigation__menu--item__link">
                      Duty Stations
                    </a>
                  </li>
                  <li className="navigation__menu--item">
                    <a href="#" className="navigation__menu--item__link">
                      Daily Blog
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="rts__menu d-flex gap-5 align-items-center">
              <div className="header__right__btn d-flex gap-3">
                <a
                  href="#"
                  className="small__btn he-3 d-none d-sm-flex no__fill__btn border-6 font-xs"
                  aria-label="Login Button"
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                >
                  Sign In
                </a>
                <a
                  href="#"
                  className="small__btn he-3 d-none d-sm-flex fill__btn border-6 font-xs"
                  aria-label="Job Posting Button"
                >
                  Add Job
                </a>
                <button
                  className="d-md-block d-lg-none"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvas"
                  aria-controls="offcanvas"
                >
                  <i className="fa-sharp fa-regular fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header