import React from 'react';
import Card from './Card';

const All = ({data}) => {
  return (
    <div>
      <h2>All</h2>
       {data.map((item,index)=>{
           return(


           
 
  

                      <>
                        <Card item={item} index={index} />
                       

                      </>

           ) 
       })}

      

    </div>
  );
};

export default All;