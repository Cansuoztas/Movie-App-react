import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate= useNavigate
  return (
<div>
<nav className="navbar bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">React Movie APP</Link>
    <form className="d-flex">
      <button className="btn btn-outline-success" onClick={()=> navigate("/login")} type="submit">
       Login
      </button>
      <button className="btn btn-outline-success" onClick={()=> navigate("/register")}  type="submit">
        Register
      </button>
    </form>
  </div>
</nav>

</div>
)
    };

export default Navbar;
