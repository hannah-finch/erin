import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full px-[5%] flex items-center justify-between shadow-md shadow-soft">
        <div className="flex gap-4">
          <Link to="/" className="self-center mt-2">
            <img src="src/assets/logo-sm-color.png" className="w-20"></img>
          </Link>
          <div className="line-v"></div>
          <h3 className="self-center">Home Cleaning</h3>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/services" class="btn-nav">
            Services
          </Link>
          <Link to="/pricing" class="btn-nav">
            Pricing
          </Link>
          <Link to="/contact" class="btn-nav">
            Contact
          </Link>

          <Link class="btn btn-blue">
            Call Me
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
