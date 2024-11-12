import { CORE_CONCEPTS } from "../../data";
import CoreConcept from "./CoreConcept/CoreConcept";

function CoreConcepts() {
  return (
    <section id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept {...conceptItem} key={conceptItem.title} />
        ))}
      </ul>
    </section>
  );
}

export default CoreConcepts;
