// function Navbar(){
//     return(
//         <div className="">
//             <div>
//                 <a href="<home">
//                 Prachi Madhukar
//                 </a>
//             </div>
//             <div className="ml-auto flex mr-25 ">
//                 <div className="px-3">
//                     i am?                </div>
//                 <div className="px-3">
//                     work
//                 </div>
//                 <div className="px-3">
//                     contact
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Navbar

import { Link } from 'react-scroll';

function Navbar() {
  return (
    <div className="flex ml-30 font-myfont pt-0.5">
      {/* Left: Brand Name */}
      <div>
        <Link to="home" smooth={true} duration={500} className="cursor-pointer">
          Prachi Madhukar
        </Link>
      </div>

      {/* Right: Navigation Links */}
      <div className="ml-auto flex mr-25">
        <Link to="about" smooth={true} duration={500} className="px-3 cursor-pointer">
          i am?
        </Link>
        <Link to="work" smooth={true} duration={500} className="px-3 cursor-pointer">
          work
        </Link>
        <Link to="contact" smooth={true} duration={500} className="px-3 cursor-pointer">
          contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
