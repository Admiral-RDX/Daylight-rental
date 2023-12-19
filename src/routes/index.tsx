import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./indexStyle.module.css";

export default component$(() => {
  return (
    <>
      <div class={styles.homePage}>
        <video class={styles.homePageMainVideoPlay} autoplay loop muted>
          <source src="https://video.wixstatic.com/video/c761da_253f3d3f095c47e7888235ba18204201/1080p/mp4/file.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div class={styles.paragraphContentHead}>
          <img src="/pageImages/BWlighting.png" alt="" />
          <div>
            <p>
              Our vision is to be the go-to lighting equipment rental service in
              Slovakia and its neighboring states, providing exceptional
              equipment and services to our customers. We are dedicated to
              staying at the forefront of technology to ensure that we can offer
              the best solutions possible for our clients.
            </p>
            <p>
              At Daylight Rental, we believe that lighting is a crucial part of
              any production. We are passionate about what we do and are
              committed to helping our clients achieve their vision.
            </p>
          </div>
        </div>
        <div class={styles.paragraphContentServices}>
          <h3>OUR SERVICES</h3>
          <p>
            We offer a wide range of the latest lighting equipment from the
            global manufacturers as ARRI, M&R, K5600, KINO FLO, LITEGEAR and
            many others. For each project we are able to provide full services
            including transportation, lighting equipment with all the
            accessories, setup and installation and our team of technicians to
            ensure that our clients have everything they need for a successful
            production.
          </p>
          <a href="#">Read more.</a>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Daylight Rental",
};
