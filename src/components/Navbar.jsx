import { Link } from 'react-scroll';

function Navbar() {
  return (
    <div className="flex ml-30 font-myfont pt-0.5">
      <div>
        <Link to="home" smooth={true} duration={500} className="cursor-none">
          Prachi Madhukar
        </Link>
      </div>

      <div className="ml-auto flex mr-25">
        <Link to="about" smooth={true} duration={500} className="px-3 cursor-none">
          i am?
        </Link>
        <Link to="work" smooth={true} duration={500} className="px-3 cursor-none">
          work
        </Link>
        <Link to="contact" smooth={true} duration={500} className="px-3 cursor-none">
          contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
