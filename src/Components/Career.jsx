import React from 'react';
import Card from './Card';

const Career = ({data}) => {
  const career = data.filter((item)=>item.head === 'CAREER')
  return (
    <div>
      <h2>Career Developer</h2>
      {career.map((item,index)=>{
        return(
          <>
          <Card item={item} index={index} />
          </>
        )
      })}
    </div>
  );
};

export default Career;