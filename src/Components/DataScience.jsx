import React from 'react';
import Card from './Card';

const DataScience = ({data}) => {
  const datascience = data.filter((item)=>item.head === 'Data Science' )
  return (
    <div>
      <h2>DataScience</h2>
      {datascience.map((item,index)=>{
        return(
          <>
          <Card item={item} index={index} />
          </>
        )
      })}

    </div>
  );
};

export default DataScience;