import { CardContainer } from "./CardContainer";
import { Introduction } from "./Introduction";

export function Section6() {
  return (
    <section className="block px-5 py-20">
      <div className="flex flex-row flex-nowrap justify-center items-center">
        <div className="flex flex-row flex-nowrap justify-start items-center w-full gap-30px">
          <div className="flex flex-col flex-nowrap justify-start items-stretch w-full gap-5">
            <div className="flex flex-col flex-nowrap justify-between items-stretch gap-30px pt-0 flex-1">
              <Introduction section={6} />
              <CardContainer section={6} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
