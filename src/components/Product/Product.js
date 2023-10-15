import React, {useState} from 'react';
import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import Cart from "../Cart/Cart";
import ProductImage from "./ProductImage";
import ProductForm from "./ProductForm/ProductForm";

const Product = ({id, name, title, colors, sizes, basePrice}) => {
    const [selectedSize, setSelectedSize] = useState(sizes[0].name);
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const [cartItems, setCartItems] = useState([]);
    const [currentPrice, setCurrentPrice] = useState(basePrice);

    const handleAddToCart = (e) => {
        e.preventDefault()
        const item = {
            id,
            title,
            selectedSize,
            selectedColor,
            currentPrice
        };
        console.log(`\n 
    Name: ${item.title} \n
    Size: ${item.selectedSize} \n
    Color: ${item.selectedColor} \n
    Price: ${currentPrice}
    `)
    };

    const handleSizeChange = (size, additionalPrice) => {
        setSelectedSize(size);
        setCurrentPrice(basePrice + additionalPrice);
    };

    return (
        <article className={styles.product}>
            <ProductImage name={name} title={title} selectedColor={selectedColor}/>
            <div>
                <header>
                    <h2 className={styles.name}>{title}</h2>
                    <span className={styles.price}>Price: ${currentPrice}</span>
                </header>
                <ProductForm title={title} currentPrice={currentPrice} sizes={sizes} selectedSize={selectedSize}
                             handleSizeChange={handleSizeChange} colors={colors} selectedColor={selectedColor}
                             setSelectedColor={setSelectedColor}
                             handleAddToCart={handleAddToCart}/>
            </div>

        </article>
    );
};

export default Product;
