import React from 'react';
import productsData from '../../data/products';
import Product from "../Product/Product";

const Products = () => {
  return (
      <section>
        {productsData.map((product) => (
            <Product
                key={product.id}
                id={product.id}
                name={product.name}
                title={product.title}
                colors={product.colors}
                sizes={product.sizes}
                basePrice={product.basePrice}
            />
        ))}
      </section>
  );
};

export default Products;
