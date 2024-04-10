import { FaSearch,  FaBell,  FaAngleDown } from 'react-icons/fa';
import logo from '../assets/Group.svg'
import '../styles/main.scss'; // Import the stylesheet
import avatar from '../assets/avatar.png'

function TopNav() {
  return (
    <div className='top-nav'>
      <nav className='topnav'>
    <div className='sectioned'>
        <div>
          <img src={logo} alt='logo' className=''/>
        </div>
    
      <div className="search-container">
        <input type="text" placeholder="Search for anything" />
        <div className='btn-container'>
        <button type="submit">
          <FaSearch />
        </button>
        </div>
      </div>
      </div>
      <div className="icons">
        <div className="icon">
         <p>Docs</p>
        </div>
        <div className="icon">
          <FaBell />
        </div>
        <div>
          <img src={avatar} alt='avatar' />
        </div>
        <div className="username">
          Adedeji
          <div className="dropdown">
            <FaAngleDown />
            <div className="dropdown-content">
            
            </div>
          </div>
        </div>
      </div>
      </nav>
    </div>
  );
}

export default TopNav;
