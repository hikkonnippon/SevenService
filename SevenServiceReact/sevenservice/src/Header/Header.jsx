import './Header.css'
function Header() {
    return (
        
        <div className="Header">
          <div className="container-fluid">
  <div className="row bg-secondary py-1 px-xl-5 left">
    <div className="col-lg-6 d-none d-lg-block">
      <div className="d-inline-flex align-items-center h-100">
        <a className="text-body mr-3" href="">
          About
        </a>
        <a className="text-body mr-3" href="">
          Contact
        </a>
        <a className="text-body mr-3" href="">
          Help
        </a>
        <a className="text-body mr-3" href="">
          FAQs
        </a>
      </div>
    </div>
    <div className="col-lg-6 text-center text-lg-right">
      <div className="d-inline-flex align-items-center">
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-sm btn-light dropdown-toggle"
            data-toggle="dropdown"
          >
            My Account
          </button>
          <div className="dropdown-menu dropdown-menu-right">
            <button className="dropdown-item" type="button">
              Sign in
            </button>
            <button className="dropdown-item" type="button">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
    <div className="col-lg-4">
      <a href="" className="text-decoration-none">
        <span className="h1 text-uppercase text-primary bg-dark px-2">
          Multi
        </span>
        <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">
          Shop
        </span>
      </a>
    </div>
    <div className="col-lg-4 col-6 text-left">
      <form action="">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search for products"
          />
          <div className="input-group-append">
            <span className="input-group-text bg-transparent text-primary">
              <i className="fa fa-search" />
            </span>
          </div>
        </div>
      </form>
    </div>
    <div className="col-lg-4 col-6 text-right">
      <p className="m-0">Customer Service</p>
      <h5 className="m-0">+012 345 6789</h5>
    </div>
  </div>
</div>

        </div>
      );
}
export default Header;