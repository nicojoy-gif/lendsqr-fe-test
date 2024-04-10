import React from 'react';
import '../styles/main.scss';
import { FaAngleDown } from 'react-icons/fa6';
import SideNavItem from './SideNavItem';
import { BusinessData, CustomersData, SettingData } from '../Data/data';
import { FaBriefcase, FaHome, FaSignOutAlt } from 'react-icons/fa';
interface SideNavProps {
  
}

const SideNav: React.FC<SideNavProps> = () => {
  return (
    <div>
      <div className='sidenav-box'>
       <div className='side-header'>
       <SideNavItem  icon={FaBriefcase} text='Switch Organization' /> <FaAngleDown />
       </div>
       <div className='dash'>
       <SideNavItem  icon={FaHome} text='Dashboard' />
       </div>
       <div>
        <h2>CUSTOMERS</h2>
        <div>
        {CustomersData.map((item, index) => (
        <SideNavItem key={index} icon={item.icon} text={item.text} />
      ))}
        </div>
       </div>

       <div>
        <h2>BUSINESS</h2>
        <div>
        {BusinessData.map((item, index) => (
        <SideNavItem key={index} icon={item.icon} text={item.text} />
      ))}
        </div>
       </div>
       <div>
        <h2>SETTINGS</h2>
        <div >
        {SettingData.map((item, index) => (
        <SideNavItem key={index} icon={item.icon} text={item.text} />
      ))}
        </div>
        <div className='setting-border'>

        </div>
        <div> <SideNavItem  icon={FaSignOutAlt} text='Logout' /></div>
        <div className='ver'>v1.2.0</div>
       </div>
      </div>
    </div>
  );
}

export default SideNav;
