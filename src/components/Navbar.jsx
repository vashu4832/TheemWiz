import React from "react";
function Navbar() {
  return (
    <div style={{backgroundColor: "#28293E"}}>
      <nav
        class="navbar navbar-expand-lg"
        style={{ backgroundColor: "#28293E" }}
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="assets/logo.png"
              alt="main-logo"
              style={{ width: "40%", marginLeft: "100px" }}
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav d-flex " style={{ marginLeft: "15%" }}>
              <a class="nav-link active mx-5  text-white " aria-current="page" href="#">
                About
              </a>
              <a class="nav-link active mx-5 text-white" aria-current="page" href="#">
                Services
              </a>
              <a class="nav-link active mx-5 text-white" aria-current="page" href="#">
                Pricing
              </a>
              <a class="nav-link active mx-5 text-white" aria-current="page" href="#">
                Blog
              </a>
            </div>
            <form class="d-flex" role="search">
              <button
                class="btn-hover-purple text-white fs-5"
                type="submit"
                variant="outline-primary"
                style={{backgroundColor: "#28293E", marginLeft: "150px"}}
              >
                Contact
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
