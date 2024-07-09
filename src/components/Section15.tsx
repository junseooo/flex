import { CardContainer } from "./CardContainer";
import { Introduction } from "./Introduction";
import { SectionDefault } from "./SectionDefault";

export function Section15() {
  return (
    <SectionDefault>
      <Introduction section={15} />
      <CardContainer section={15} />
    </SectionDefault>
  );
}
