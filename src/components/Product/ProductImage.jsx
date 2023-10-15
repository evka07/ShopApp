import React from 'react';
import styles from "./Product.module.scss";

const ProductImage = ({name, title, selectedColor}) => {
    return (
        <div className={styles.imageContainer}>
            <img
                className={styles.image}
                alt={`${title} shirt`}
                src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${selectedColor}.jpg`}
            />
        </div>
    );
};

export default ProductImage;