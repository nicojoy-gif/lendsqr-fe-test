import React from 'react';

interface Props {
  fullName: string;
  para: string
}

const Name: React.FC<Props> = ({ fullName, para }) => {
  return (
    <div className=''>
      <h3>{fullName}</h3>
      <p>{para}</p>
    </div>
  );
};

export default Name;
