import styles from "./Button.module.css";

const Button = ({ isSecondary, icon, text }) => {
  return (
    <button className={isSecondary ? styles.secondary_btn : styles.primary_btn}>
      {icon}
      {text}
    </button>
  );
};

export default Button;
