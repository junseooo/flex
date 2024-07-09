import { CardContainer } from "./CardContainer";
import { Introduction } from "./Introduction";
import { SectionDefault } from "./SectionDefault";

export function Section12() {
  return (
    <SectionDefault>
      <Introduction section={12} />
      <CardContainer section={12} />
    </SectionDefault>
  );
}
