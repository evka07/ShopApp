import React, {useMemo, useState} from 'react';
import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import Cart from "../Cart/Cart";
import ProductImage from "./ProductImage";
import ProductForm from "./ProductForm/ProductForm";

const Product = ({id, name, title, colors, sizes, basePrice}) => {
    const [selectedSize, setSelectedSize] = useState(sizes[0].name);
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    // const [currentPrice, setCurrentPrice] = useState(basePrice);

    const price = useMemo(() => {
        const selectedSizeData = sizes.find((size) => size.name === selectedSize)
        return basePrice + (selectedSizeData ? selectedSizeData.additionalPrice : 0)
    }, [selectedSize, basePrice, sizes])

    const handleAddToCart = (e) => {
        e.preventDefault()
        const item = {
            id,
            title,
            selectedSize,
            selectedColor,
            price
        };
        console.log(`\n 
    Name: ${item.title} \n
    Size: ${item.selectedSize} \n
    Color: ${item.selectedColor} \n
    Price: ${price}
    `)
    };

    const handleSizeChange = (size, additionalPrice) => {
        setSelectedSize(size);
    };

    return (
        <article className={styles.product}>
            <ProductImage name={name} title={title} selectedColor={selectedColor}/>
            <div>
                <header>
                    <h2 className={styles.name}>{title}</h2>
                    <span className={styles.price}>Price: ${price}</span>
                </header>
                <ProductForm title={title} currentPrice={price} sizes={sizes} selectedSize={selectedSize}
                             handleSizeChange={handleSizeChange} colors={colors} selectedColor={selectedColor}
                             setSelectedColor={setSelectedColor}
                             handleAddToCart={handleAddToCart}/>
            </div>

        </article>
    );
};

export default Product;
