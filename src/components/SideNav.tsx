import React, { useState } from 'react';
import { FaAngleDown, FaBriefcase, FaHome, FaSignOutAlt } from 'react-icons/fa';
import SideNavItem from './SideNavItem';
import { BusinessData, CustomersData, SettingData } from '../Data/data';

interface SideNavProps {}

const SideNav: React.FC<SideNavProps> = () => {
  const [activeItem, setActiveItem] = useState<string>('');
  const handleItemClick = (itemName: string) => {
    setActiveItem((prevActiveItem) => (prevActiveItem === itemName ? '' : itemName));
  };
  

  return (
    <div>
      <div className='sidenav-box'>
        <div className='side-header'>
          <SideNavItem icon={FaBriefcase} text='Switch Organization' onClick={() => handleItemClick('Switch Organization')} /> <FaAngleDown />
        </div>
        <div className='dash'>
          <SideNavItem icon={FaHome} text='Dashboard' onClick={() => handleItemClick('Dashboard')} />
        </div>
        <div>
          <h2>CUSTOMERS</h2>
          <div>
            {CustomersData.map((item) => (
              <SideNavItem key={item.text} icon={item.icon} page={item.page} text={item.text} isActive={activeItem === item.text} onClick={() => handleItemClick(item.text)} />
            ))}
          </div>
        </div>
        <div>
          <h2>BUSINESS</h2>
          <div>
            {BusinessData.map((item) => (
              <SideNavItem key={item.text} icon={item.icon} text={item.text} isActive={activeItem === item.text} onClick={() => handleItemClick(item.text)} />
            ))}
          </div>
        </div>
        <div>
          <h2>SETTINGS</h2>
          <div>
            {SettingData.map((item) => (
              <SideNavItem key={item.text} icon={item.icon} text={item.text} isActive={activeItem === item.text} onClick={() => handleItemClick(item.text)} />
            ))}
          </div>
          <div className='setting-border'></div>
          <div> <SideNavItem icon={FaSignOutAlt} text='Logout' onClick={() => handleItemClick('Logout')} /></div>
          <div className='ver'>v1.2.0</div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
