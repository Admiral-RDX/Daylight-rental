import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.module.css";

export default component$(() => {
  return (
    <>
      <div class={styles.ourWork}>
        <p>
          Here you can find a brief list of the many projects we worked on. From{" "}
          <br />a wide range of commercials to international and local film
          projects.
        </p>
        <h3>Commercials</h3>
        <div class={styles.imageFilmContainer}>
          <img src="/pageImages/tattooist.png" alt="" />
          <img src="/pageImages/vanHelsing.png" alt="" />
          <img src="/pageImages/tattooist.png" alt="" />
          <img src="/pageImages/vanHelsing.png" alt="" />
        </div>
        <h3>Commercials</h3>
        <div class={styles.imageFilmContainer}>
          <img src="/pageImages/tattooist.png" alt="" />
          <img src="/pageImages/vanHelsing.png" alt="" />
          <img src="/pageImages/tattooist.png" alt="" />
          <img src="/pageImages/vanHelsing.png" alt="" />
        </div>
        <h3>Commercials</h3>
        <div class={styles.imageFilmContainer}>
          <img src="/pageImages/tattooist.png" alt="" />
          <img src="/pageImages/vanHelsing.png" alt="" />
          <img src="/pageImages/tattooist.png" alt="" />
          <img src="/pageImages/vanHelsing.png" alt="" />
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "About us",
};
