import { CardContainer } from "./CardContainer";
import { Introduction } from "./Introduction";
import { SectionDefault } from "./SectionDefault";

export function Section14() {
  return (
    <SectionDefault>
      <Introduction section={14} />
      <CardContainer section={14} />
    </SectionDefault>
  );
}
