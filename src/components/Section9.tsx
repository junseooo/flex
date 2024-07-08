import { SectionDefault } from "./SectionDefault";
import { CardContainer } from "./CardContainer";
import { Introduction } from "./Introduction";

export function Section9() {
  return (
    <SectionDefault>
      <Introduction section={9} />
      <CardContainer section={9} />
    </SectionDefault>
  );
}
