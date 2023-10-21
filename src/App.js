import styles from "./styles.css";
import Navigation from "./components/Navigation/Navigation";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import ContactForm from "./components/ContactForm/ContactForm";

export default function App() {
  return (
    <div className={styles.body}>
      <Navigation />

      <ContactHeader />
      <ContactForm />
    </div>
  );
}
