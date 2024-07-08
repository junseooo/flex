import { CardContainer } from "./CardContainer";
import { Introduction } from "./Introduction";

export function Section8() {
  return (
    <section className="block px-5 py-20">
      <div className="flex flex-row flex-nowrap justify-center items-center">
        <div className="flex flex-col flex-nowrap justify-start items-center w-full gap-30px">
          <Introduction section={8} />
          <CardContainer section={8} />
        </div>
      </div>
    </section>
  );
}
