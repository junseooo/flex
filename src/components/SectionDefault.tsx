import { ReactNode } from "react";

export function SectionDefault({ children }: { children: ReactNode }) {
  return (
    <section className="block px-5 py-20 ">
      <div className="flex flex-row flex-nowrap justify-center items-center">
        <div
          className={`flex flex-col flex-nowrap justtify-start items-center w-full gap-30px`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
