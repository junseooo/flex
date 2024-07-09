import { CardContainer } from "./CardContainer";
import { Introduction } from "./Introduction";
import { SectionDefault } from "./SectionDefault";

export function Section18() {
  return (
    <SectionDefault>
      <Introduction section={18} />
      <CardContainer section={18} />
    </SectionDefault>
  );
}
