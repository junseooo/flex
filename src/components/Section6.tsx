export function Section6() {
  return (
    <section className="block px-5 py-20">
      <div className="flex flex-row flex-nowrap justify-center items-center">
        <div className="flex flex-row flex-nowrap justify-start items-center w-full gap-30px">
          <div className="flex flex-col flex-nowrap justify-start items-stretch w-full gap-5">
            <div className="flex flex-col flex-nowrap justify-between items-stretch gap-30px pt-0 flex-1">
              <div className="flex flex-col flex-nowrap justify-center items-center text-center self-center gap-3">
                <div className="flex flex-row flex-nowrap justify-center items-center gap-2">
                  <svg
                    className="w-6 h-6"
                    width="35"
                    height="36"
                    viewBox="0 0 35 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_7063_3490)">
                      <path
                        d="M4 29.7293C4 32.6212 5.55405 34.1753 8.40541 34.1753H20.3108C23.1757 34.1753 24.7162 32.6077 24.7162 29.7293V27.378H26.7973C29.6622 27.378 31.2027 25.8104 31.2027 22.932V5.60773C31.2027 2.72935 29.6622 1.17529 26.7973 1.17529H14.9054C12.0405 1.17529 10.5 2.72935 10.5 5.60773V7.97259H8.40541C5.55405 7.97259 4 9.52664 4 12.405V29.7293ZM17.9595 6.01313C17.3784 6.01313 17.027 5.5807 17.027 5.12124V4.81043C17.027 4.43205 17.3243 3.93205 17.9595 3.93205H23.7568C24.3784 3.93205 24.6892 4.43205 24.6892 4.81043V5.12124C24.6892 5.5807 24.3243 6.01313 23.7568 6.01313H17.9595ZM7.12162 29.4185V12.7293C7.12162 11.6618 7.64865 11.0807 8.77027 11.0807H12.3378V17.5131C12.3378 19.6483 13.3649 20.6618 15.473 20.6618H21.5946V29.4185C21.5946 30.4861 21.0676 31.0537 19.9459 31.0537H8.77027C7.64865 31.0537 7.12162 30.4861 7.12162 29.4185ZM15.7297 18.0672C15.1757 18.0672 14.9324 17.8239 14.9324 17.2699V11.6077L21.3108 18.0672H15.7297Z"
                        fill="#7C947D"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_7063_3490">
                        <rect
                          width="35"
                          height="35"
                          fill="white"
                          transform="translate(0 0.175293)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="font-bold text-17px text-section-6-title tracking-section-6-title">
                    인사정보 관리
                  </span>
                </div>
                <span className="font-extrabold text-28px text-section-6-second-title">
                  하나의 플랫폼
                  <br />
                  모두의 데이터
                </span>
                <span className="font-semibold text-15px text-section-6-content">
                  근태, 급여, 계약, 결재, 채용, 평가, 목표관리.
                  <br />
                  모든 업무 관리와 데이터 관리, 이제는 flex에서
                </span>
              </div>
              <div className="flex flex-col flex-nowrap justify-between items-start h-400px flex-1-1-400px overflow-hidden pt-30px pl-5 bg-section-6 gap-30px rounded-20px">
                <span></span>
                <img
                  data-component="landing-image"
                  src="https://static.flex.team/v2/landing/home/corehr/img-core-1.png"
                  srcSet="https://static.flex.team/v2/landing/home/corehr/img-core-1.png 1x, https://static.flex.team/v2/landing/home/corehr/img-core-1@2x.png 2x, https://static.flex.team/v2/landing/home/corehr/img-core-1@3x.png 3x"
                  data-card="home-card"
                  alt="Core hr flex"
                />
              </div>
            </div>
            <div className="flex flex-col flex-nowrap justify-between items-start h-400px flex-0-0-400px overflow-hidden pt-30px px-5 gap-30px bg-section-6-background rounded-20px"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
