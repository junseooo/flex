import { useEffect, useState } from "react";

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });

  const onScroll = () => {
    setState({ x: window.scrollX, y: window.scrollY });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return state;
};

export function Section19() {
  const { x, y } = useScroll();
  console.log(x, y);

  const hideOptions = "opacity-0 -translate-y-20px";
  const viewOptions = "opacity-1";
  const [bgColor, setBgColor] = useState("bg-white");
  const [options1, setOptions1] = useState(viewOptions);
  const [options2, setOptions2] = useState(hideOptions);
  const [options3, setOptions3] = useState(hideOptions);
  const [options4, setOptions4] = useState(hideOptions);

  useEffect(() => {
    if (y < 21339) {
      setBgColor("bg-white");
    } else if (y >= 21339 && y < 21459) {
      setBgColor("bg-section-19-part-1-1-background");
    } else if (y >= 21459 && y < 21579) {
      setBgColor("bg-section-19-part-1-2-background");
    } else if (y >= 21579 && y < 21699) {
      setBgColor("bg-section-19-part-1-3-background");
    } else if (y >= 21699 && y < 21819) {
      setBgColor("bg-section-19-part-1-4-background");
    } else if (y >= 21819) {
      setBgColor("bg-section-19-part-1-5-background");
    }
  }, [y]);

  useEffect(() => {
    if (y < 23035) {
      setOptions1(viewOptions);
      setOptions2(hideOptions);
    } else if (y >= 23035 && y < 23395) {
      setOptions1(hideOptions);
      setOptions2(viewOptions);
      setOptions3(hideOptions);
    } else if (y >= 23395 && y < 23755) {
      setOptions2(hideOptions);
      setOptions3(viewOptions);
      setOptions4(hideOptions);
    } else if (y >= 23755) {
      setOptions3(hideOptions);
      setOptions4(viewOptions);
    }
  }, [y]);

  return (
    <div className="block">
      <section className="block pt-220px">
        <div className="flex flex-col flex-nowrap justify-start items-stretch gap-116px bg-section-19-part-1-5-background">
          <div
            className={`flex flex-row flex-nowrap justify-center items-center ${bgColor} relative h-custom`}
          >
            <span className="font-extrabold text-36px text-white sticky top-50% -translate-y-50% text-center">
              모바일은
              <br />
              <span className="section-19-text-gradient">핵심 경험에 집중</span>
            </span>
          </div>
          <div className="flex flex-col flex-nowrap justify-start items-stretch bg-section-19-part-2-background relative h-2484px">
            <div className="flex flex-col flex-nowrap justify-start items-stretch top-20% sticky gap-100px">
              <div className="flex flex-col flex-nowrap justify-start items-center h-558px relative w-full">
                <div
                  className={`flex flex-col flex-nowrap justify-start items-center ${options1} gap-68px absolute top-0`}
                >
                  <div className="flex flex-col flex-nowrap justify-start items-center gap-10px">
                    <div className="flex flex-row flex-nowrap justify-start items-center gap-8px">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="flex-shrink-0"
                      >
                        <path
                          fill="#cdd2d6"
                          d="M5.842 2C4.272 2 3 3.221 3 4.727v14.546C3 20.779 4.272 22 5.842 22h12.316C19.728 22 21 20.779 21 19.273V4.727C21 3.221 19.727 2 18.158 2H5.842ZM7.5 5.636c-.392 0-.71.306-.71.682 0 .377.318.682.71.682h9c.392 0 .71-.305.71-.682 0-.376-.318-.682-.71-.682h-9Zm-.71 3.41c0-.377.318-.682.71-.682h5.21c.393 0 .711.305.711.681 0 .377-.318.682-.71.682H7.5c-.392 0-.71-.305-.71-.682ZM7.736 12c-.523 0-.948.407-.948.91v4.544c0 .503.425.91.948.91h8.526c.523 0 .947-.407.947-.91V12.91c0-.502-.424-.909-.947-.909H7.737Z"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="font-bold text-20px text-section-19-part-2-title">
                        오늘
                      </span>
                    </div>
                    <span className="font-bold text-28px text-center text-white">
                      가장 중요한
                      <br />
                      정보는 한 눈에
                    </span>
                  </div>
                  <img
                    data-component="landing-image"
                    src="https://static.flex.team/v2/landing/home/mobile/screen01.png"
                    srcSet="https://static.flex.team/v2/landing/home/mobile/screen01.png 1x, https://static.flex.team/v2/landing/home/mobile/screen01@2x.png 2x, https://static.flex.team/v2/landing/home/mobile/screen01@3x.png 3x"
                    alt="오늘"
                  />
                </div>
                <div
                  className={`flex flex-col flex-nowrap justify-start items-center ${options2} gap-68px absolute top-0`}
                >
                  <div className="flex flex-col flex-nowrap justify-start items-center gap-10px">
                    <div className="flex flex-row flex-nowrap justify-start items-center gap-8px">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="flex-shrink-0"
                      >
                        <path
                          fill="#cdd2d6"
                          d="M21.35 4.65h-10.7v3.7h10.7v-3.7ZM17.35 10.15H2.65v3.7h14.7v-3.7ZM21.35 15.65H7.65v3.7h13.7v-3.7Z"
                        ></path>
                      </svg>
                      <span className="font-bold text-20px text-section-19-part-2-title">
                        일정
                      </span>
                    </div>
                    <span className="font-bold text-28px text-center text-white">
                      나와 동료의
                      <br />
                      일정은 한 곳에
                    </span>
                  </div>
                  <img
                    data-component="landing-image"
                    src="https://static.flex.team/v2/landing/home/mobile/screen02.png"
                    srcSet="https://static.flex.team/v2/landing/home/mobile/screen02.png 1x, https://static.flex.team/v2/landing/home/mobile/screen02@2x.png 2x, https://static.flex.team/v2/landing/home/mobile/screen02@3x.png 3x"
                    alt="일정"
                  />
                </div>
                <div
                  className={`flex flex-col flex-nowrap justify-start items-center ${options3} gap-68px absolute top-0`}
                >
                  <div className="flex flex-col flex-nowrap justify-start items-center gap-10px">
                    <div className="flex flex-row flex-nowrap justify-start items-center gap-8px">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="flex-shrink-0"
                      >
                        <path
                          fill="#cdd2d6"
                          d="M2.1 12c0-5.468 4.432-9.9 9.9-9.9a9.87 9.87 0 0 1 7.087 2.987L12 12.182l-1.887-1.886a1.15 1.15 0 1 0-1.626 1.626l2.7 2.7a1.15 1.15 0 0 0 1.627 0l7.688-7.697A9.853 9.853 0 0 1 21.9 12c0 5.467-4.432 9.9-9.9 9.9S2.1 17.467 2.1 12Z"
                        ></path>
                      </svg>
                      <span className="font-bold text-20px text-section-19-part-2-title">
                        할 일
                      </span>
                    </div>
                    <span className="font-bold text-28px text-center text-white">
                      업무 흐름은
                      <br />
                      놓칠 걱정 없이
                    </span>
                  </div>
                  <img
                    data-component="landing-image"
                    src="https://static.flex.team/v2/landing/home/mobile/screen03.png"
                    srcSet="https://static.flex.team/v2/landing/home/mobile/screen03.png 1x, https://static.flex.team/v2/landing/home/mobile/screen03@2x.png 2x, https://static.flex.team/v2/landing/home/mobile/screen03@3x.png 3x"
                    alt="할 일"
                  />
                </div>
                <div
                  className={`flex flex-col flex-nowrap justify-start items-center ${options4} gap-68px absolute top-0`}
                >
                  <div className="flex flex-col flex-nowrap justify-start items-center gap-10px">
                    <div className="flex flex-row flex-nowrap justify-start items-center gap-8px">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="flex-shrink-0"
                      >
                        <path
                          fill="#cdd2d6"
                          d="m13.665 1.5-8.41 11.84L6 14.68h4.379l-1.66 7.153 1.624.667 8.402-11.84L18 9.32h-4.378l1.666-7.152-1.623-.668Z"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="font-bold text-20px text-section-19-part-2-title">
                        Spotlight
                      </span>
                    </div>
                    <span className="font-bold text-28px text-center text-white">
                      주요 기능은
                      <br />
                      빠르게
                    </span>
                  </div>
                  <img
                    data-component="landing-image"
                    src="https://static.flex.team/v2/landing/home/mobile/screen04.png"
                    srcSet="https://static.flex.team/v2/landing/home/mobile/screen04.png 1x, https://static.flex.team/v2/landing/home/mobile/screen04@2x.png 2x, https://static.flex.team/v2/landing/home/mobile/screen04@3x.png 3x"
                    alt="Spotlight"
                  />
                </div>
              </div>
              <div className="flex flex-col flex-nowrap justify-center items-center gap-40px">
                <span className="font-extrabold text-28px text-white text-center">
                  손 안에서 시작되는
                  <br />
                  <span className="section-19-part-2-text-gradient">
                    새로운 HR
                  </span>
                </span>
                <div className="flex flex-row flex-nowrap justify-start items-stretch gap-8px">
                  <a
                    href="/"
                    className="w-140px h-45px flex justify-center items-center gap-8px rounded-48px bg-section-19-part-2-store outline-none text-white text-14px font-medium"
                  >
                    <img
                      data-component="landing-image"
                      src="https://static.flex.team/v2/landing/home/mobile/img-appstore.png"
                      srcSet="https://static.flex.team/v2/landing/home/mobile/img-appstore.png 1x, https://static.flex.team/v2/landing/home/mobile/img-appstore@2x.png 2x, https://static.flex.team/v2/landing/home/mobile/img-appstore@3x.png 3x"
                      alt="App Store 아이콘"
                    />
                    App Store
                  </a>
                  <a
                    href="/"
                    className="w-140px h-45px flex justify-center items-center gap-8px rounded-48px bg-section-19-part-2-store outline-none text-white text-14px font-medium"
                  >
                    <img
                      data-component="landing-image"
                      src="https://static.flex.team/v2/landing/home/mobile/img-playstore.png"
                      srcSet="https://static.flex.team/v2/landing/home/mobile/img-playstore.png 1x, https://static.flex.team/v2/landing/home/mobile/img-playstore@2x.png 2x, https://static.flex.team/v2/landing/home/mobile/img-playstore@3x.png 3x"
                      alt="Play Store 아이콘"
                    />
                    Google Play
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
