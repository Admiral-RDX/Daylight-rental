import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";
import LinkedIn from "./icons/linkedin.svg";
import Facebook from "./icons/facebook.svg";
import Instagram from "./icons/instagram.svg";
import Pinterest from "./icons/pinterest.svg";
import { useNavigate } from "@builder.io/qwik-city";

export const MasterFooter = component$(() => {
  const redirect = useNavigate();

  return (
    <>
      <div class={styles.footer}>
        <div class={styles.footerItemPointer}>
          <h3>ADDRESS</h3>
          <p>Panónska cesta</p>
          <p>34851 04 BRATISLAVA</p>
        </div>

        <div class={styles.footerItemPointer}>
          <h3>CONTACT</h3>
          <p>+421 911 811 745</p>
          <p>info@daylightrental.com</p>
        </div>

        <div class={styles.footerItemPointer}>
          <h3>OPENING HOURS</h3>
          <p>Mon - Fri 8:00 am - 4:00 pm</p>
          <a
            onClick$={() => {
              redirect("/Contacts");
            }}
          >
            Careers
          </a>
          <a
            onClick$={() => {
              redirect("/GDPR");
            }}
          >
            GDPR & Data Privacy
          </a>
        </div>
      </div>
      <div class={styles.footerSocialIcons}>
        <img
          onClick$={() => {
            redirect("/noPreset");
          }}
          src={LinkedIn}
          alt=""
        />
        <img
          onClick$={() => {
            redirect("/noPreset");
          }}
          src={Facebook}
          alt=""
        />
        <img
          onClick$={() => {
            redirect("/noPreset");
          }}
          src={Instagram}
          alt=""
        />
        <img
          onClick$={() => {
            redirect("/noPreset");
          }}
          src={Pinterest}
          alt=""
        />
      </div>
      <p class={styles.copyright}>
        &copy; 2023 @daylight rental. All rights reserved.
      </p>
    </>
  );
});
