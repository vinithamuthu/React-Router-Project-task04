import React from 'react';
import Card from './Card';

const FullStack = ({data}) => {
  const fulstack = data.filter((item)=>item.head === 'Full Stack Development' )
  return (
    <div>
      <h2>Full Stack Development</h2>
      {fulstack.map((item,index)=>{
        return(
          <>
          <Card item={item} index={index} />
          </>
        )
      })}
    </div>
  );
};

export default FullStack;