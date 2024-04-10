import React from 'react';

type Props = {
  iconSrc: string;
  title: string;
  count: number;
};

const UserComponent: React.FC<Props> = ({ iconSrc, title, count }) => {
  return (
    <div className='user-container'>
      <div className='user-contain'>
        <div>
          <img src={iconSrc} alt='icon' />
        </div>
        <h2>{title}</h2>
        <p>{count}</p>
      </div>
    </div>
  );
};

export default UserComponent;
