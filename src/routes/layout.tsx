import { component$, Slot } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { MasterFooter } from "~/components/footer/footer";
import { MasterHeader } from "~/components/header/header";

export default component$(() => {
  const loc = useLocation();
  return (
    <>
      <MasterHeader />
      <Slot />
      {loc.url.pathname.slice(0, -1) !== "/Contacts" ? <MasterFooter /> : ""}
    </>
  );
});
