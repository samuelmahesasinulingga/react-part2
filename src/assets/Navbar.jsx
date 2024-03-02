import NavLink from "./NavLink";

function Navbar() {
  return (
    <>
      {/* Navbar */}
      <nav className="w-full h-16 bg-primary-dark fixed flex justify-between items-center px-10 py-2">
        <h1 className="text-3xl text-primary-light font-bold">Samuel's Clothes</h1>
        <input type="checkbox" id="check" className="hidden" />
        <label for="check" className="icons">
          <i className="fa-solid fa-bars" id="menu-icon"></i>
          <i className="fa-solid fa-x" id="close-icon"></i>
        </label>
        <div className="flex justify-around gap-4">
          <NavLink 
            text="Home" 
          />
          <NavLink 
            text="About" 
          />
          <NavLink 
            text="Menu" 
          />
          <NavLink 
            text="Contact" 
          />
          <a
            href=""
            className="bg-primary text-white font-bold text-md rounded-[20px] px-4 py-2"
          >
            Login
          </a> 
        </div>
      </nav>
    </>
  );
}

export default Navbar;