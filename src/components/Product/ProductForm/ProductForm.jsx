import React from 'react';
import styles from "../Product.module.scss";
import clsx from "clsx";
import Button from "../../Button/Button";
import OptionSize from "./OptionSize";
import OptionColor from "./OptionColor";

const ProductForm = ({
                         title, currentPrice, sizes, selectedSize,
                         handleSizeChange, colors, selectedColor, setSelectedColor, handleAddToCart
                     }) => {
    return (
        <div>
            <div className={styles.sizes}>
                <h3 className={styles.optionLabel}>Sizes</h3>
                <ul className={styles.choices}>
                    {sizes.map((size) => (
                        <OptionSize
                        key={size.name}
                        size={size}
                        selectedSize={selectedSize}
                        handleSizeChange={handleSizeChange}
                        />
                    ))}
                </ul>
            </div>
            <div className={styles.colors}>
                <h3 className={styles.optionLabel}>Colors</h3>
                <ul className={styles.choices}>
                    {colors.map((color) => (
                  <OptionColor
                  key={color}
                  color={color}
                  setSelectedColor={setSelectedColor}
                  selectedColor={selectedColor}
                  />
                    ))}
                </ul>
            </div>
            <Button className={styles.button} handleAddToCart={handleAddToCart}>
                <span className="fa fa-shopping-cart" />
            </Button>
        </div>
    );
};

export default ProductForm;