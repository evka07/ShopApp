import React, { useState } from 'react';
import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import Cart from "../Cart/Cart";

const Product = ({ id, name, title, colors, sizes, basePrice }) => {
  const [selectedSize, setSelectedSize] = useState(sizes[0].name);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [cartItems, setCartItems] = useState([]);
  const [currentPrice, setCurrentPrice] = useState(basePrice);

  const handleAddToCart = () => {
    const item = {
      id,
      title,
      selectedSize,
      selectedColor,
    };
    setCartItems([...cartItems, item]);
  };

  const handleSizeChange = (size, additionalPrice) => {
    setSelectedSize(size);
    setCurrentPrice(basePrice + additionalPrice);
  };

  return (
      <article className={styles.product}>
        <div className={styles.imageContainer}>
          <img
              className={styles.image}
              alt={`${title} shirt`}
              src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${selectedColor}.jpg`}
          />
        </div>
        <div>
          <header>
            <h2 className={styles.name}>{title}</h2>
            <span className={styles.price}>Price: ${currentPrice}</span>
          </header>
          <form>
            <div className={styles.sizes}>
              <h3 className={styles.optionLabel}>Sizes</h3>
              <ul className={styles.choices}>
                {sizes.map((size) => (
                    <li key={size.name}>
                      <button
                          type="button"
                          className={selectedSize === size.name ? styles.active : ''}
                          onClick={() => handleSizeChange(size.name, size.additionalPrice)}
                      >
                        {size.name}
                      </button>
                    </li>
                ))}
              </ul>
            </div>
            <div className={styles.colors}>
              <h3 className={styles.optionLabel}>Colors</h3>
              <ul className={styles.choices}>
                {colors.map((color) => (
                    <li key={color}>
                      <button
                          type="button"
                          style={{background: color}}
                          className={clsx(
                              selectedColor === color ? styles.active : ''
                          )}
                          onClick={() => setSelectedColor(color)}
                      />
                    </li>
                ))}
              </ul>
            </div>
            <Button className={styles.button} onClick={handleAddToCart}>
              <span className="fa fa-shopping-cart" />
            </Button>
          </form>
        </div>
        <Cart cartItems={cartItems} />
      </article>
  );
};

export default Product;
