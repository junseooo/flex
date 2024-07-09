import { CardContainer } from "./CardContainer";
import { Introduction } from "./Introduction";
import { SectionDefault } from "./SectionDefault";

export function Section16() {
  return (
    <SectionDefault>
      <Introduction section={16} />
      <CardContainer section={16} />
    </SectionDefault>
  );
}
