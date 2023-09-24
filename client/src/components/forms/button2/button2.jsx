import styles from "./button2.module.css";

const Button2 = ({ children, fullwidth }) => {
    return (
      <div className={`${styles.button} ${fullwidth && styles.fullWidth} `}>
        {children}
      </div>
    );
  };
  
  export default Button2;