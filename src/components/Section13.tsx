import { CardContainer } from "./CardContainer";
import { Introduction } from "./Introduction";
import { SectionDefault } from "./SectionDefault";

export function Section13() {
  return (
    <SectionDefault>
      <Introduction section={13} />
      <CardContainer section={13} />
    </SectionDefault>
  );
}
