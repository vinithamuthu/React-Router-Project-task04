import React from 'react';
import Card from './Card';

const CyberSecurity = ({data}) => {
  const cyber = data.filter((item)=>item.head === 'CYBER SECURITY' )
  return (
    <div>
      <h2>CyberSecurity</h2>
      {cyber.map((item,index)=>{
        return(
          <>
          <Card item={item} index={index} />
          </>
        )
      })}

    </div>
  );
};

export default CyberSecurity;