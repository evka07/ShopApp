import styles from './Button.module.scss';
import clsx from 'clsx';

const Button = (props) => {
    return (<button onClick={props.onAddToCart} className={clsx(styles.button, props.className)}>{props.children}</button>);
};

export default Button;