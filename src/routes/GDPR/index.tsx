import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.module.css";

export default component$(() => {
  return (
    <div class={styles.GDPRcontainer}>
      <h3>GDPR compliance</h3>
      <p>
        Which companies does the GDPR affect? Any company that stores or
        processes personal information about EU citizens within EU states must
        comply with the GDPR, even if they do not have a business presence
        within the EU. Specific criteria for companies required to comply are: A
        presence in an EU country. No presence in the EU, but it processes
        personal data of European residents. More than 250 employees. Fewer than
        250 employees but its data-processing impacts the rights and freedoms of
        data subjects, is not occasional, or includes certain types of sensitive
        personal data. That effectively means almost all companies. A PwC survey
        showed that 92% of U.S. companies consider GDPR a top data protection
        priority. A new survey conducted by Propeller Insights and sponsored by
        Netsparker Ltd. asked executives which industries would be most affected
        by GDPR. Most (53%) saw the technology sector being most impacted
        followed by online retailers (45%), software companies (44%), financial
        services (37%), online services/SaaS (34%), and retail/consumer packaged
        goods (33%). Who within my company will be responsible for compliance?
        The GDPR defines several roles that are responsible for ensuring
        compliance: data controller, data processor and the data protection
        officer (DPO). The data controller defines how personal data is
        processed and the purposes for which it is processed. The controller is
        also responsible for making sure that outside contractors comply. Data
        processors may be the internal groups that maintain and process personal
        data records or any outsourcing firm that performs all or part of those
        activities. The GDPR holds processors liable for breaches or
        non-compliance. It's possible, then, that both your company and
        processing partner such as a cloud provider will be liable for penalties
        even if the fault is entirely on the processing partner. The GDPR
        requires the controller and the processor to designate a DPO to oversee
        data security strategy and GDPR compliance. Companies are required to
        have a DP
      </p>
    </div>
  );
});

export const head: DocumentHead = {
  title: "GDPR",
};
