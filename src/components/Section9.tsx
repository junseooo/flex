import { CardContainer } from "./CardContainer";
import { Introduction } from "./Introduction";

export function Section9() {
  return (
    <section className="block px-5 py-20">
      <div className="flex flex-row flex-nowrap justify-center items-center">
        <div className="flex flex-col flex-nowrap justify-start items-center w-full gap-30px">
          <Introduction section={9} />
          {/* <CardContainer section={9} /> */}
        </div>
      </div>
    </section>
  );
}
