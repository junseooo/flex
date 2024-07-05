import { Introduction } from "./Introduction";

export function Section7() {
  return (
    <section className="block px-5 py-20">
      <div className="flex flex-row flex-nowrap justify-center items-center">
        <div className="flex flex-col flex-nowrap justify-start items-center w-full gap-30px">
          <div className="flex flex-col flex-nowrap justify-start items-center gap-3 px-5 py-10 w-full rounded-20px bg-section-7">
            <div className="flex flex-row flex-nowrap justify-center items-center gap-2">
              <svg
                className="w-6 h-6"
                width="35"
                height="36"
                viewBox="0 0 35 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_7063_3495)">
                  <g clip-path="url(#clip1_7063_3495)">
                    <path
                      d="M9.52484 34.5952H26.0863C28.4421 34.5952 29.6111 33.4191 29.6111 30.8531V17.9694C29.6111 15.6529 28.6546 14.4589 26.7062 14.2629V10.2C26.7062 3.73148 22.3312 0.595215 17.7967 0.595215C13.2799 0.595215 8.90489 3.73148 8.90489 10.2V14.2986C7.06277 14.5659 6 15.742 6 17.9694V30.8531C6 33.4191 7.16904 34.5952 9.52484 34.5952ZM12.7308 9.93274C12.7308 6.35098 14.9804 4.31953 17.7967 4.31953C20.613 4.31953 22.8625 6.35098 22.8625 9.93274V14.2273L12.7308 14.2451V9.93274Z"
                      fill="#FF9C28"
                    ></path>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_7063_3495">
                    <rect
                      width="35"
                      height="35"
                      fill="white"
                      transform="translate(0 0.595215)"
                    ></rect>
                  </clipPath>
                  <clipPath id="clip1_7063_3495">
                    <rect
                      width="35"
                      height="35"
                      fill="white"
                      transform="translate(0 0.595215)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <span className="font-bold text-section-7-security text-17px tracking-section-6-title">
                보안
              </span>
            </div>
            <span className="font-extrabold text-section-6-second-title text-center text-28px">
              flex와 함께
              <br />
              안전한 고객 데이터
            </span>
            <span className="font-semibold text-section-6-content text-center text-15px">
              중요한 HR 데이터를 다루는 플랫폼, 선택의 기준은 보안입니다.
            </span>
            <a
              href="/"
              className="flex flex-row flex-nowrap justify-start items-center"
            >
              <span className="font-bold text-section-3-link text-15px">
                자세히 보기
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                className="flex-shrink:0"
              >
                <path
                  fill="#3b86c8"
                  d="M9.783 17.566 8.65 16.434 13.086 12 8.65 7.566l1.132-1.132L15.349 12l-5.566 5.566Z"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <Introduction section={7} />
          </div>
        </div>
      </div>
    </section>
  );
}
