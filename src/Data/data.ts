import { IconType } from 'react-icons';
import { FaUser,  FaUserFriends, FaUsers, FaHandshake, FaPiggyBank, FaUserCheck, FaBriefcase, FaCoins, FaGalacticSenate, FaUserCog, FaScroll, FaChartBar, FaClipboard, FaTired } from 'react-icons/fa';
import { FaIdBadge, FaSackDollar, FaSackXmark, FaSliders } from 'react-icons/fa6';


export interface SideNavItemData {
  icon: IconType;
  text: string;
  page?: string;
}

export const CustomersData: SideNavItemData[] = [
  { icon: FaUserFriends, text: 'Users' , page: '/userdetails'},
  { icon: FaUsers, text: 'Guarantors' },
  { icon: FaSackDollar, text: 'Loans' }, 
  { icon: FaHandshake, text: 'Decision Models' },
  { icon: FaUser, text: 'Savings' },
  { icon: FaPiggyBank, text: 'Loan Requests' },
  { icon: FaSackXmark, text: 'Whitelist' }, 
  { icon: FaUserCheck, text: 'Karma' },
 
];

export const BusinessData: SideNavItemData[] = [
  { icon: FaBriefcase, text: 'Organization' },
  { icon: FaSackDollar, text: 'Loan Products' },
  { icon: FaPiggyBank, text: 'Savings Products' },
  { icon: FaCoins, text: 'Fees and Charges' }, 
  { icon: FaUserCheck, text: 'Transactions' },
  { icon: FaGalacticSenate, text: 'Services' },
  { icon: FaUserCog, text: 'Service Account' },
  { icon: FaScroll, text: 'Settlements' }, 
  { icon: FaChartBar, text: 'Reports' },
 
];


export const SettingData: SideNavItemData[] = [
    { icon: FaSliders, text: 'Preferences' },
    { icon: FaIdBadge, text: 'Fees and Pricing' },
    { icon: FaClipboard, text: 'Audit Logs' },
    { icon: FaTired, text: 'Systems Messages' },
  ];