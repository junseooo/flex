import { CardContainer } from "./CardContainer";
import { Introduction } from "./Introduction";
import { SectionDefault } from "./SectionDefault";

export function Section17() {
  return (
    <SectionDefault>
      <Introduction section={17} />
      <CardContainer section={17} />
    </SectionDefault>
  );
}
