import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className="logo">
        <img src="./images/logo.png" alt="" />
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
