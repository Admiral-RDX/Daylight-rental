import { component$, useStore } from "@builder.io/qwik";
import styles from "./header.module.css";
import { useLocation, useNavigate } from "@builder.io/qwik-city";

export const MasterHeader = component$(() => {
  const redirect = useNavigate();
  const loc = useLocation();
  const helper = useStore({
    isMobileNavVisible: false,
  });

  return (
    <div class={styles.masterHeader}>
      <img src="/daylightRentalLogo.png" alt="" />

      <div class={styles.linkMenu}>
        <h5
          onClick$={() => {
            redirect("/");
          }}
          class={loc.url.pathname.slice(0, -1) === "" ? styles.currentPage : ""}
        >
          Home
        </h5>
        <h5
          onClick$={() => {
            redirect("/About");
          }}
          class={
            loc.url.pathname.slice(0, -1) === "/About" ? styles.currentPage : ""
          }
        >
          About
        </h5>
        <h5
          onClick$={() => {
            redirect("/OurServices");
          }}
          class={
            loc.url.pathname.slice(0, -1) === "/OurServices"
              ? styles.currentPage
              : ""
          }
        >
          Our services
        </h5>
        <h5
          onClick$={() => {
            redirect("/OurWork");
          }}
          class={
            loc.url.pathname.slice(0, -1) === "/OurWork"
              ? styles.currentPage
              : ""
          }
        >
          Our work
        </h5>
        <h5
          onClick$={() => {
            redirect("/Contacts");
          }}
          class={
            loc.url.pathname.slice(0, -1) === "/Contacts"
              ? styles.currentPage
              : ""
          }
        >
          Contacts
        </h5>
      </div>

      <div class={styles.mobileLinkMenuIcon}>
        <label for="check">
          <input
            type="checkbox"
            id="check"
            checked={helper.isMobileNavVisible}
            onClick$={() => {
              helper.isMobileNavVisible
                ? (helper.isMobileNavVisible = false)
                : (helper.isMobileNavVisible = true);
            }}
          />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div
        class={[
          styles.mobileLinkMenu,
          helper.isMobileNavVisible ? "" : styles.hideElement,
        ]}
      >
        <h5
          onClick$={() => {
            redirect("/");
            helper.isMobileNavVisible = false;
          }}
          class={loc.url.pathname.slice(0, -1) === "" ? styles.currentPage : ""}
        >
          Home
        </h5>
        <h5
          onClick$={() => {
            redirect("/About");
            helper.isMobileNavVisible = false;
          }}
          class={
            loc.url.pathname.slice(0, -1) === "/About" ? styles.currentPage : ""
          }
        >
          About
        </h5>
        <h5
          onClick$={() => {
            redirect("/OurServices");
            helper.isMobileNavVisible = false;
          }}
          class={
            loc.url.pathname.slice(0, -1) === "/OurServices"
              ? styles.currentPage
              : ""
          }
        >
          Our services
        </h5>
        <h5
          onClick$={() => {
            redirect("/OurWork");
            helper.isMobileNavVisible = false;
          }}
          class={
            loc.url.pathname.slice(0, -1) === "/OurWork"
              ? styles.currentPage
              : ""
          }
        >
          Our work
        </h5>
        <h5
          onClick$={() => {
            redirect("/Contacts");
            helper.isMobileNavVisible = false;
          }}
          class={
            loc.url.pathname.slice(0, -1) === "/Contacts"
              ? styles.currentPage
              : ""
          }
        >
          Contacts
        </h5>
      </div>
    </div>
  );
});
