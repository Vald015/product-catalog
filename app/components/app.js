import React from 'react';

export default (props) => {
  return (
    <div className="container">
      <div className="page-header">
        <h1>Product Catalog</h1>
      </div>
      {props.children}
    </div>
  );
}
