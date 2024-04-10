import React from 'react';
import '../styles/main.scss';
import { IconType } from 'react-icons';

interface SideNavItemProps {
  icon: IconType; // Icon component from react-icons
  text: string;
  isActive?: boolean; // Optional prop to determine if item is active
}

const SideNavItem: React.FC<SideNavItemProps> = ({ icon: Icon, text, isActive }) => {
  return (
    <div>
      <div className={`navicons ${isActive ? 'active' : ''}`}>
        <Icon />
        <p>{text}</p>
      </div>
    </div>
  );
}

export default SideNavItem;
