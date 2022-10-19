import * as React from "react";
import { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import OutsideClickHandler from "react-outside-click-handler";
import Slide from "@mui/material/Slide";

import styles from "../styles/Mail.module.css";
function Mail(props) {
  const form = useRef();
  const ref = useRef();
  const clickOutside = () => {
    setChecked(false);
    document.body.style.overflow = "unset";
  };
  // Hook
  const useOnClickOutside = (ref, handler) => {
    useEffect(
      () => {
        const listener = (event) => {
          // Do nothing if clicking ref's element or descendent elements
          console.log(event);
          console.log(ref);
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
          handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
          document.removeEventListener("mousedown", listener);
          document.removeEventListener("touchstart", listener);
        };
      },
      // Add ref and handler to effect dependencies
      // It's worth noting that because passed in handler is a new ...
      // ... function on every render that will cause this effect ...
      // ... callback/cleanup to run every render. It's not a big deal ...
      // ... but to optimize you can wrap handler in useCallback before ...
      // ... passing it into this hook.
      [ref, handler]
    );
  };
  useOnClickOutside(ref, () => clickOutside());
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

  const goToTheTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  const handleClick = () => {
    setChecked(!checked);
    // setChecked((prev) => !prev);
    console.log(checked);
    props.goToTop();
    if (!checked) {
      document.body.style.overflow = "hidden";
      console.log("overflow hidden");
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const mailBox = (
    /*  <div>
      <div className={styles.empty} onClick={handleClick}></div> */
    <div ref={ref} className={styles.container}>
      <form className={styles.form} ref={form} onSubmit={sendEmail}>
        <p className={styles.x} onClick={handleClick}>
          ⓧ
        </p>
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
