import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.module.css";

export default component$(() => {
  return (
    <div class={styles.contact}>
      <div>
        <h1>Request a quote</h1>
        <div class={styles.quoteRequest}>
          <input class={styles.div1} placeholder="Name" type="text" name="" id="" />
          <input class={styles.div2} placeholder="Email" type="text" name="" id="" />
          <input class={styles.div3} placeholder="Phone" type="text" name="" id="" />
          <input class={styles.div4} placeholder="Address" type="text" name="" id="" />
          <input class={styles.div5} placeholder="Subject" type="text" name="" id="" />
          <textarea class={styles.div6} name="" id="" placeholder="Message"></textarea>
          <button class={styles.div7}>Submit</button>
        </div>
      </div>
      <div class={styles.mapDetails}>
        <div class={styles.headLocationInfo}>
          <div>
            <p>
              Panónska cesta 34, 851 04 <br />
              Bratislava-Petržalka, Slovakia
            </p>
            <p>Mon - Fri 8:00 am - 4:00 pm</p>
          </div>
          <div>
            <p>+421 911 811 745</p>
            <p>info@daylightrental.com</p>
          </div>
        </div>
        <div>
          <img src="/pageImages/globalMap.png" alt="" />
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Contact us",
};
