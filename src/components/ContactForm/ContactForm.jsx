import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";

export default function ContactForm() {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA CHAT SUPPORT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<FaPhone fontSize="24px" />} />
        </div>
        <Button
          isSecondary={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24px" />}
        />

        <form>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="email">E-Mail</label>
            <input type="email" name="email" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="5" />
          </div>
        </form>

        <div className={styles.submit}>
          <Button text="SUBMIT" />
        </div>
      </div>

      <div className={styles.contact_image}>
        <img src="../images/contact.svg" alt="image" />
      </div>
    </section>
  );
}
