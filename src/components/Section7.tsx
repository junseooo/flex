import { SectionDefault } from "./SectionDefault";
import { Introduction } from "./Introduction";

export function Section7() {
  return (
    <SectionDefault>
      <div className="flex flex-col flex-nowrap justify-start items-center gap-3 px-5 py-10 w-full rounded-20px bg-section-7">
        <Introduction section={7} />
      </div>
    </SectionDefault>
  );
}
