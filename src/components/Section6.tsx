import { Introduction } from "./Introduction";

export function Section6() {
  return (
    <section className="block px-5 py-20">
      <div className="flex flex-row flex-nowrap justify-center items-center">
        <div className="flex flex-row flex-nowrap justify-start items-center w-full gap-30px">
          <div className="flex flex-col flex-nowrap justify-start items-stretch w-full gap-5">
            <div className="flex flex-col flex-nowrap justify-between items-stretch gap-30px pt-0 flex-1">
              <Introduction section={6} />
              <div className="flex flex-col flex-nowrap justify-between items-start h-400px flex-1-1-400px overflow-hidden pt-30px pl-5 bg-section-6 gap-30px rounded-20px">
                <span className="font-bold text-section-6-card-text-1 text-xl">
                  <span className="text-section-6-card-text-2">
                    모든 HR 데이터가 flex에
                  </span>
                  <br />
                  구성원의 개인정보, 인사정보와
                  <br />
                  근태, 급여, 계약기록을 flex 하나로
                  <br />
                  관리할 수 있습니다.
                </span>
                <img
                  data-component="landing-image"
                  src="https://static.flex.team/v2/landing/home/corehr/img-core-1.png"
                  srcSet="https://static.flex.team/v2/landing/home/corehr/img-core-1.png 1x, https://static.flex.team/v2/landing/home/corehr/img-core-1@2x.png 2x, https://static.flex.team/v2/landing/home/corehr/img-core-1@3x.png 3x"
                  data-card="home-card"
                  alt="Core hr flex"
                />
              </div>
            </div>
            <div className="flex flex-col flex-nowrap justify-between items-start h-400px flex-0-0-400px overflow-hidden pt-30px px-5 gap-30px bg-section-6-background rounded-20px">
              <span className="font-bold text-section-6-card-text-3 text-xl">
                <span className="text-section-6-card-text-4">
                  모든 HR 업무를 flex 하나로
                </span>
                <br />
                flex의 모든 기능은
                <br />
                구성원 데이터와 연동되어
                <br />
                유기적으로 동작합니다.
              </span>
              <img
                className="max-w-200px self-center"
                data-component="landing-image"
                src="https://static.flex.team/v2/landing/home/corehr/img-core-2.png"
                srcSet="https://static.flex.team/v2/landing/home/corehr/img-core-2.png 1x, https://static.flex.team/v2/landing/home/corehr/img-core-2@2x.png 2x, https://static.flex.team/v2/landing/home/corehr/img-core-2@3x.png 3x"
                data-card="home-card"
                alt="All in one hr"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
