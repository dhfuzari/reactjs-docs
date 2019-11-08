import React from 'react';
import Cars from './Cars';

const ProductList = props => {
  return (
    <div className="product-list">
      <h2>Product list:</h2>
      <Cars />
    </div>
  );
};

export default ProductList;
