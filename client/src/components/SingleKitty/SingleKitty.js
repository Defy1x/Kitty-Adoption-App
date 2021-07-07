import React from 'react';

const SingleKitty = (props) => {
  return(
  <div>
  <h1>Name: {props.kittyName}</h1>
  <h2>Age: {props.kittyAge}</h2>
  </div>
);
}

export default SingleKitty;
