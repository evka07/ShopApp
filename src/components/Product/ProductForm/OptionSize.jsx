import React from 'react';
import styles from "../Product.module.scss";

const OptionSize = ({size, selectedSize, handleSizeChange}) => {
    return (
        <li key={size.name}>
            <button
                type="button"
                className={selectedSize === size.name ? styles.active : ''}
                onClick={() => handleSizeChange(size.name, size.additionalPrice)}
            >
                {size.name}
            </button>
        </li>
    );
};

export default OptionSize;