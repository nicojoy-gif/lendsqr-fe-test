import React, { useState, useEffect } from 'react';
import '../styles/main.scss';
import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';

interface SideNavItemProps {
  icon: IconType; // Icon component from react-icons
  text: string;
  isActive?: boolean; // Optional prop to determine if item is active
  onClick?: () => void; // Optional onClick handler
  page?: any
}

const SideNavItem: React.FC<SideNavItemProps> = ({ icon: Icon, text, isActive, onClick, page }) => {
  const [active, setActive] = useState(isActive || false);

  useEffect(() => {
    setActive(isActive || false);
  }, [isActive]);

  const handleClick = () => {
    setActive(!active);
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className='side-icons'>
       <Link to={page}>
      <div className={`navicons ${active ? 'active' : ''}`} onClick={handleClick}>
       
       <div className='side-icon'>
        <Icon />
        </div>
        <p>{text}</p>
      </div>
      </Link>
    </div>
  );
}

export default SideNavItem;
