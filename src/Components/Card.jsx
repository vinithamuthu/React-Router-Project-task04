import React from 'react';

const Card = ({item,index}) => {
  return (
    <div>
       <div className="card-group">

       <div key={index}>

       <div className="card">

    <img src={item.image} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{item.head}</h5>
      <p className="card-text">{item.content}</p>
      <p className="card-Num">{item.date}</p>
      <p className="card-Numb">{item.month}</p>

    </div>
    <div className="card-footer">
      <small className="text-body-secondary">Last updated 3 mins ago</small>
    </div>
  </div>

{/* <img src={item.image} />
<h2>{item.head}</h2>
<h2>{item.content}</h2>
<h3>{item.date}</h3>
<h3>{item.month}</h3> */}

</div>

</div>

    </div>
  );
};

export default Card;