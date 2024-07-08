import { SectionDefault } from "./SectionDefault";
import { CardContainer } from "./CardContainer";
import { Introduction } from "./Introduction";

export function Section8() {
  return (
    <SectionDefault>
      <Introduction section={8} />
      <CardContainer section={8} />
    </SectionDefault>
  );
}
