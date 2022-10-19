import * as React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import Slide from "@mui/material/Slide";
import FormControlLabel from "@mui/material/FormControlLabel";
import styles from "../styles/Mail.module.css";
function Mail(props) {
  const form = useRef();
  const [checked, setChecked] = React.useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hwjgmmr",
        "template_hygp3nn",
        form.current,
        "ajwD9BqgW2eWP008v"
      )
      .then(
        (result) => {
          console.log(result.text);
          setChecked(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const handleClick = () => {
    setChecked((prev) => !prev);
  };
  const mailBox = (
    <div className={styles.container}>
      <form className={styles.form} ref={form} onSubmit={sendEmail}>
        <input
          type='text'
          placeholder='Name'
          name='user_name'
          className={styles.input}
        />

        <input
          type='email'
          name='user_email'
          placeholder='Email'
          className={styles.input}
        />

        <textarea
          placeholder='Message'
          className={styles.messageinput}
          name='message'
          id=''
          cols='30'
          rows='10'
        ></textarea>
        <div className={styles.buttons}>
          <div className={styles.btn} onClick={sendEmail}>
            <p className={styles.sendbtn}>Send</p>
          </div>
          {/*       <input type='submit' value='send' className={styles.sendbtn} /> */}
          <div className={styles.btn} onClick={handleClick}>
            <p className={styles.cancelbtn}>Cancel</p>
          </div>
        </div>
      </form>
    </div>
  );
  console.log(props);
  return (
    <>
      <a className='navbar__link' onClick={handleClick}>
        Contact me
      </a>

      <Slide direction='left' in={checked} mountOnEnter unmountOnExit>
        {mailBox}
      </Slide>
    </>
  );
}

export default Mail;
