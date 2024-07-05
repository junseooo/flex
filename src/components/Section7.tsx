import { Introduction } from "./Introduction";

export function Section7() {
  return (
    <section className="block px-5 py-20">
      <div className="flex flex-row flex-nowrap justify-center items-center">
        <div className="flex flex-col flex-nowrap justify-start items-center w-full gap-30px">
          <div className="flex flex-col flex-nowrap justify-start items-center gap-3 px-5 py-10 w-full rounded-20px bg-section-7">
            <Introduction section={7} />
          </div>
        </div>
      </div>
    </section>
  );
}
