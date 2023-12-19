import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.module.css";

export default component$(() => {
  return (
    <>
      <div class={styles.aboutUs}>
        <p>
          Daylight Rental is the professional lighting rental company in
          Slovakia providing lighting equipment and services for the film, TV &
          commercial production industry. We offer a wide range of lighting
          equipment and its accessories. Our team of experts can help you choose
          the right equipment for your project and provide technical support
          throughout your production. We are committed to providing the highest
          quality equipment and services to ensure the success of your project
        </p>
        <img src="/pageImages/lightsColored.png" alt="" />

        <div class={styles.paragraphContentUniversal}>
          <img src="/pageImages/sampleImage.png" alt="" />
          <div>
            <h3>Our team</h3>
            <p>
              Daylight Rental s.r.o. was founded by two industry professionals
              with a passion for lighting equipment. Together, they built the
              company on the principles of quality and innovation. Meet our team
              of almost 50 technicians who are committed to delivering the
              highest quality services and support to ensure the success of your
              projects.
            </p>
          </div>
        </div>

        <div class={styles.paragraphContentUniversal}>
          <div>
            <h3>Our references</h3>
            <p>
              Annually, we participate in the production of more than 200
              advertising spots, of which several dozen outside Slovakia. During
              those years, we have been also part of many foreign films and
              series production.
            </p>
          </div>
          <img src="/pageImages/sampleImage.png" alt="" />
        </div>

        <div class={styles.storyLineContent}>
          <div class={[styles.historyEventBox, styles.div1]}>
            <div class={styles.head}>
              <h3>
                EXPANSION OF EQUIPMENT <br />
                AND SERVICES
              </h3>
              <h1>2005</h1>
            </div>
            <p>
              Daylight Rental s.r.o. is founded in Slovakia with a focus on
              providing lighting equipment and services to the film, TV &
              commercial production industry
            </p>
          </div>

          <div class={styles.div2}></div>

          <div class={[styles.historyEventBox, styles.div3]}>
            <div class={styles.head}>
              <h3>
                EXPANSION OF EQUIPMENT <br />
                AND SERVICES
              </h3>
              <h1>2005</h1>
            </div>
            <p>
              Daylight Rental s.r.o. is founded in Slovakia with a focus on
              providing lighting equipment and services to the film, TV &
              commercial production industry
            </p>
          </div>

          <div class={[styles.historyEventBox, styles.div4]}>
            <div class={styles.head}>
              <h3>
                EXPANSION OF EQUIPMENT <br />
                AND SERVICES
              </h3>
              <h1>2005</h1>
            </div>
            <p>
              Daylight Rental s.r.o. is founded in Slovakia with a focus on
              providing lighting equipment and services to the film, TV &
              commercial production industry
            </p>
          </div>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "About us",
};
