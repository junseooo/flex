import { CardContainer } from "./CardContainer";
import { Introduction } from "./Introduction";
import { SectionDefault } from "./SectionDefault";

export function Section11() {
  return (
    <SectionDefault>
      <Introduction section={11} />
      <CardContainer section={11} />
    </SectionDefault>
  );
}
