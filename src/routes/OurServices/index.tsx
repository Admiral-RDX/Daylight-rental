import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.module.css";

export default component$(() => {
  return (
    <div class={styles.ourServicesContainer}>
      <h1>LIGHTING EQUIPMENT RENTAL</h1>
      <div class={styles.welcomeHeader}>
        <img src="/pageImages/roofLighting.png" alt="" />
        <div class={styles.content}>
          <p>
            Daylight Rental offers a wide range of lighting equipment rental
            options for all types of filming, TV and commercial production
            needs. We use the latest technology in lighting equipment to ensure
            the highest quality results for your project.
          </p>
          <button>Equipment list</button>
        </div>
      </div>
      <div class={styles.logoIcon}>
        <img src="/pageImages/DLR_astera.png" alt="" />
        <img src="/pageImages/DLR_creamsource.png" alt="" />
        <img src="/pageImages/DLR_litegear.png" alt="" />
        <img src="/pageImages/DLR_astera.png" alt="" />
        <img src="/pageImages/DLR_creamsource.png" alt="" />
        <img src="/pageImages/DLR_litegear.png" alt="" />
        <img src="/pageImages/DLR_astera.png" alt="" />
      </div>
      <div class={styles.paragraphContentUniversal}>
        <img src="/pageImages/sampleImage.png" alt="" />
        <div>
          <h3>Accessories and control systems</h3>
          <p>
            At our company, we provide more than just the equipment - we offer
            all the accessories you need to make your lighting setup complete.
            From control systems to generators and power supply, we tailor our
            service to meet your specific needs. Rent with us and experience
            quality service that ensures your project will be a success.
          </p>
        </div>
      </div>
      <div class={styles.paragraphContentUniversal}>
        <div>
          <h3>Transportation</h3>
          <p>
            At Daylight Rental, we make it easy to transport your rental
            equipment to your required location. Our extensive fleet of
            vehicles, including trucks, vans, pick-ups and personal vehicles,
            guarantees that your items arrive safely and on time. We take pride
            in knowing that your satisfaction is our top priority.
          </p>
        </div>
        <img src="/pageImages/transportation.png" alt="" />
      </div>
      <div class={styles.paragraphContentUniversal}>
        <img src="/pageImages/sampleImage.png" alt="" />
        <div>
          <h3>Lightning design service</h3>
          <p>
            Our team of experienced lighting designers can help you create the
            perfect lighting setup for your project, from concept to
            installation. We work closely with you to understand your vision and
            bring it to life with our cutting-edge lighting equipment and design
            expertise.
          </p>
        </div>
      </div>
      <div class={styles.paragraphContentUniversal}>
        <div>
          <h3>Real-time support</h3>
          <p>
            We understand that time is of the essence in the film and TV
            industry, which is why we offer real-time support to all our
            customers. Our team is available 24/7 to assist you with any
            technical issues or concerns you might have.
          </p>
        </div>
        <img src="/pageImages/real-time.png" alt="" />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Our services",
};