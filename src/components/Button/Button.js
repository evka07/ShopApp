import styles from './Button.module.scss';
import clsx from 'clsx';

const Button = ({className, children, handleAddToCart}) => {
    return (<button onClick={handleAddToCart} className={clsx(styles.button, className)}>{children}</button>);
};

export default Button;