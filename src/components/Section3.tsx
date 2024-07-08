export function Section3() {
  return (
    <section className="block pt-20 bg-section-3">
      <div>
        <div className="flex flex-col flex-nowrap justify-start items-center gap-60px">
          <div className="flex flex-col flex-nowrap justify-start items-center gap-3">
            <div className="flex flex-col flex-nowrap justify-start items-center gap-20.5px">
              <div className="flex flex-row flex-nowrap justify-start items-center gap-2">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 35 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6562 34.4703C11.625 34.4703 12.3906 34.0328 13.5625 33.0016L18.5781 28.5953H26.7812C31.2812 28.5953 33.9531 25.8922 33.9531 21.4235V9.76721C33.9531 5.29846 31.2812 2.59534 26.7812 2.59534H8.17188C3.67188 2.59534 1 5.29846 1 9.76721V21.4235C1 25.8922 3.82812 28.5953 7.95312 28.5953H8.42188V31.9703C8.42188 33.5172 9.26562 34.4703 10.6562 34.4703ZM11.5312 30.4547V26.3297C11.5312 25.361 11.0781 25.0016 10.2031 25.0016H8.375C5.84375 25.0016 4.60938 23.7203 4.60938 21.2203V9.95471C4.60938 7.47034 5.84375 6.18909 8.375 6.18909H26.5781C29.1094 6.18909 30.3594 7.47034 30.3594 9.95471V21.2203C30.3594 23.7203 29.1094 25.0016 26.5781 25.0016H18.3281C17.3281 25.0016 16.875 25.1735 16.1719 25.8922L11.5312 30.4547ZM10.4531 17.9078C11.7188 17.9078 12.75 16.861 12.75 15.5953C12.75 14.3141 11.7188 13.2828 10.4531 13.2828C9.17188 13.2828 8.14062 14.3141 8.14062 15.5953C8.14062 16.861 9.17188 17.9078 10.4531 17.9078ZM17.4844 17.9078C18.7656 17.9078 19.7969 16.861 19.7969 15.5953C19.7969 14.3141 18.7656 13.2828 17.4844 13.2828C16.2188 13.2828 15.1719 14.3141 15.1719 15.5953C15.1719 16.861 16.2188 17.9078 17.4844 17.9078ZM24.5312 17.9078C25.8125 17.9078 26.8438 16.861 26.8438 15.5953C26.8438 14.3141 25.8125 13.2828 24.5312 13.2828C23.25 13.2828 22.2188 14.3141 22.2188 15.5953C22.2188 16.861 23.25 17.9078 24.5312 17.9078Z"
                    fill="#A29AED"
                  ></path>
                </svg>
                <span className="text-17px font-bold text-section-3-title">
                  고객 사례
                </span>
              </div>
              <span className="text-28px font-extrabold text-section-3-content">
                고객에게 물었습니다.
                <br />왜 flex를 선택했나요?
              </span>
            </div>
            <a
              href="/"
              className="flex flex-row flex-nowrap justify-start items-center"
            >
              <span className="text-15px font-bold text-section-3-link">
                모든 고객 사례 보기
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#3b86c8"
                  d="M9.783 17.566 8.65 16.434 13.086 12 8.65 7.566l1.132-1.132L15.349 12l-5.566 5.566Z"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <ul className="flex w-full px-10 pb-30px gap-6 overflow-x-scroll my-4">
            <li className="list-item list-none flex-shrink-0">
              <a
                href="/"
                className="flex flex-col flex-nowrap justify-start items-stretch gap-30px"
              >
                <img
                  className="w-280px h-255px object-cover rounded-lg overflow-clip"
                  data-component="landing-image"
                  src="https://static.flex.team/v2/landing/home/interview/lunit.png"
                  srcSet="https://static.flex.team/v2/landing/home/interview/lunit.png 1x, https://static.flex.team/v2/landing/home/interview/lunit@2x.png 2x, https://static.flex.team/v2/landing/home/interview/lunit@3x.png 3x"
                  alt="lunit interview"
                />
                <div className="flex flex-col flex-nowrap justify-start items-stretch gap-4">
                  <span className="text-section-3-15px font-bold">
                    업무를 자동화하고, 본질적인 HR을 고민할 수 있어요.
                  </span>
                  <div className="flex flex-row flex-nowrap justify-start items-center gap-10px">
                    <img
                      data-component="landing-image"
                      src="https://static.flex.team/v2/landing/home/interview/logo-lunit.png"
                      srcSet="https://static.flex.team/v2/landing/home/interview/logo-lunit.png 1x, https://static.flex.team/v2/landing/home/interview/logo-lunit@2x.png 2x, https://static.flex.team/v2/landing/home/interview/logo-lunit@3x.png 3x"
                      alt="lunit logo"
                    />
                    <span className="font-normal text-13px text-section-3-manager">
                      강민진 매니저
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li className="list-item list-none flex-shrink-0">
              <a
                href="/"
                className="flex flex-col flex-nowrap justify-start items-stretch gap-30px"
              >
                <img
                  className="w-280px h-255px object-cover rounded-lg overflow-clip"
                  data-component="landing-image"
                  src="https://static.flex.team/v2/landing/home/interview/flo.png"
                  srcSet="https://static.flex.team/v2/landing/home/interview/flo.png 1x, https://static.flex.team/v2/landing/home/interview/flo@2x.png 2x, https://static.flex.team/v2/landing/home/interview/flo@3x.png 3x"
                  alt="flo interview"
                />
                <div className="flex flex-col flex-nowrap justify-start items-stretch gap-4">
                  <span className="text-section-3-15px font-bold">
                    인사담당자의 일이 훨씬 편해졌어요.
                  </span>
                  <div className="flex flex-row flex-nowrap justify-start items-center gap-10px">
                    <img
                      data-component="landing-image"
                      src="https://static.flex.team/v2/landing/home/interview/logo-flo.png"
                      srcSet="https://static.flex.team/v2/landing/home/interview/logo-flo.png 1x, https://static.flex.team/v2/landing/home/interview/logo-flo@2x.png 2x, https://static.flex.team/v2/landing/home/interview/logo-flo@3x.png 3x"
                      alt="flo logo"
                    />
                    <span className="font-normal text-13px text-section-3-manager">
                      박지혜 매니저
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li className="list-item list-none flex-shrink-0">
              <a
                href="/"
                className="flex flex-col flex-nowrap justify-start items-stretch gap-30px"
              >
                <img
                  className="w-280px h-255px object-cover rounded-lg overflow-clip"
                  data-component="landing-image"
                  src="https://static.flex.team/v2/landing/home/interview/cardoc.png"
                  srcSet="https://static.flex.team/v2/landing/home/interview/cardoc.png 1x, https://static.flex.team/v2/landing/home/interview/cardoc@2x.png 2x, https://static.flex.team/v2/landing/home/interview/cardoc@3x.png 3x"
                  alt="cardoc interview"
                />
                <div className="flex flex-col flex-nowrap justify-start items-stretch gap-4">
                  <span className="text-section-3-15px font-bold">
                    HR 체계를 만들거나 개편하고 싶은 회사에 추천해요.
                  </span>
                  <div className="flex flex-row flex-nowrap justify-start items-center gap-10px">
                    <img
                      data-component="landing-image"
                      src="https://static.flex.team/v2/landing/home/interview/logo-cardoc.png"
                      srcSet="https://static.flex.team/v2/landing/home/interview/logo-cardoc.png 1x, https://static.flex.team/v2/landing/home/interview/logo-cardoc@2x.png 2x, https://static.flex.team/v2/landing/home/interview/logo-cardoc@3x.png 3x"
                      alt="cardoc logo"
                    />
                    <span className="font-normal text-13px text-section-3-manager">
                      이태석 크루
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li className="list-item list-none flex-shrink-0">
              <a
                href="/"
                className="flex flex-col flex-nowrap justify-start items-stretch gap-30px"
              >
                <img
                  className="w-280px h-255px object-cover rounded-lg overflow-clip"
                  data-component="landing-image"
                  src="https://static.flex.team/v2/landing/home/interview/groundx.png"
                  srcSet="https://static.flex.team/v2/landing/home/interview/groundx.png 1x, https://static.flex.team/v2/landing/home/interview/groundx@2x.png 2x, https://static.flex.team/v2/landing/home/interview/groundx@3x.png 3x"
                  alt="groundx interview"
                />
                <div className="flex flex-col flex-nowrap justify-start items-stretch gap-4">
                  <span className="text-section-3-15px font-bold">
                    빠른 피드백과 업데이트가 flex를 쓰는 이유입니다.
                  </span>
                  <div className="flex flex-row flex-nowrap justify-start items-center gap-10px">
                    <img
                      data-component="landing-image"
                      src="https://static.flex.team/v2/landing/home/interview/logo-groundx.png"
                      srcSet="https://static.flex.team/v2/landing/home/interview/logo-groundx.png 1x, https://static.flex.team/v2/landing/home/interview/logo-groundx@2x.png 2x, https://static.flex.team/v2/landing/home/interview/logo-groundx@3x.png 3x"
                      alt="groundx logo"
                    />
                    <span className="font-normal text-13px text-section-3-manager">
                      HR팀
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li className="list-item list-none flex-shrink-0">
              <a
                href="/"
                className="flex flex-col flex-nowrap justify-start items-stretch gap-30px"
              >
                <img
                  className="w-280px h-255px object-cover rounded-lg overflow-clip"
                  data-component="landing-image"
                  src="https://static.flex.team/v2/landing/home/interview/bat.png"
                  srcSet="https://static.flex.team/v2/landing/home/interview/bat.png 1x, https://static.flex.team/v2/landing/home/interview/bat@2x.png 2x, https://static.flex.team/v2/landing/home/interview/bat@3x.png 3x"
                  alt="bat interview"
                />
                <div className="flex flex-col flex-nowrap justify-start items-stretch gap-4">
                  <span className="text-section-3-15px font-bold">
                    인사 담당자가 없다면 더욱 flex를 도입해야 해요.
                  </span>
                  <div className="flex flex-row flex-nowrap justify-start items-center gap-10px">
                    <img
                      data-component="landing-image"
                      src="https://static.flex.team/v2/landing/home/interview/logo-bat.png"
                      srcSet="https://static.flex.team/v2/landing/home/interview/logo-bat.png 1x, https://static.flex.team/v2/landing/home/interview/logo-bat@2x.png 2x, https://static.flex.team/v2/landing/home/interview/logo-bat@3x.png 3x"
                      alt="bat logo"
                    />
                    <span className="font-normal text-13px text-section-3-manager">
                      권예은 인사팀장
                    </span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
