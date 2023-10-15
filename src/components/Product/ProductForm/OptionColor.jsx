import React from 'react';
import clsx from "clsx";
import styles from "../Product.module.scss";

const OptionColor = ({color, selectedColor, setSelectedColor}) => {
    return (
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
    );
};

export default OptionColor;