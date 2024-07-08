import { CardContainer } from "./CardContainer";
import { Introduction } from "./Introduction";
import { SectionDefault } from "./SectionDefault";

export function Section10() {
  return (
    <SectionDefault>
      <Introduction section={10} />
      <CardContainer section={10} />
    </SectionDefault>
  );
}
