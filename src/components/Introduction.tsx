interface IntroductionProps {
  section: number;
}

interface IInformations {
  svgContent: string;
  titleText: string;
  subTitleText: string;
  contentText: string;
  extraComponents?: string;
}

export function Introduction({ section }: IntroductionProps) {
  const informations: IInformations = {
    svgContent: "",
    titleText: "",
    subTitleText: "",
    contentText: "",
  };
  switch (section) {
    case 1:
      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
      break;
    case 5:
      break;
    case 6:
      informations.svgContent = `<svg
                    width="24px"
                    height="24px"
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
                  </svg>`;
      informations.titleText = "인사정보 관리";
      informations.subTitleText = "하나의 플랫폼<br />모두의 데이터";
      informations.contentText =
        "근태, 급여, 계약, 결재, 채용, 평가 목표관리.<br />모든 업무 관리와 데이터 관리, 이제는 flex에서";
      break;
    case 7:
      informations.svgContent = `<svg
                width="24px"
                height="24px"
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
              </svg>`;
      informations.titleText = "보안";
      informations.subTitleText = "flex와 함께<br />안전한 고객 데이터";
      informations.contentText =
        "중요한 HR 데이터를 다루는 플랫폼, 선택의 기준은 보안입니다.";
      informations.extraComponents = `<a
              href="/"
              class="flex flex-row flex-nowrap justify-start items-center"
            >
              <span class="font-bold text-section-3-link text-15px">
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
            </a>`;
      break;
    case 8:
      break;
    case 9:
      informations.svgContent = `<svg width="24" height="24" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 33.5952C25.8531 33.5952 33.0161 26.4322 33.0161 17.5952C33.0161 8.7421 25.8692 1.59521 17.0161 1.59521C15.9215 1.59521 15.2294 2.23908 15.2294 3.30145V8.56503C15.2294 9.46644 15.8732 10.1747 16.7907 10.1747C17.6922 10.1747 18.336 9.46644 18.336 8.56503V5.37791C24.4849 6.05397 29.2012 11.2532 29.2012 17.5952C29.2012 24.3397 23.7928 29.7964 17 29.7964C10.2233 29.7964 4.79879 24.3397 4.79879 17.5952C4.81489 14.8105 5.76459 12.1868 7.37425 10.1425C8.0825 9.11232 8.24346 8.14652 7.40644 7.34169C6.58551 6.55296 5.28169 6.64954 4.44467 7.7763C2.30382 10.4805 1 13.9091 1 17.5952C1 26.4322 8.16298 33.5952 17 33.5952ZM19.4789 20.1063C20.7988 18.722 20.5252 16.8065 18.9477 15.7602L11.5915 10.8025C10.497 10.0942 9.4829 11.1083 10.2072 12.2029L15.1489 19.559C16.1952 21.1204 18.1107 21.4262 19.4789 20.1063Z" fill="#916DF6"></path></svg>`;
      informations.titleText = "근태관리";
      informations.subTitleText =
        "회사 문화와 일하는 방식,<br />그리고 국내 법에 맞게";
      informations.contentText =
        "불편한 근태관리만큼 구성원 모두에게<br />번거로운 일도 없습니다.";
  }
  return (
    <div className="flex flex-col flex-nowrap justify-center items-center gap-3 text-center self-center">
      <div className="flex flex-row flex-nowrap justify-center items-center gap-2">
        <div dangerouslySetInnerHTML={{ __html: informations.svgContent }} />
        <span className="font-bold text-section-6-title text-17px tracking-section-6-title">
          {informations.titleText}
        </span>
      </div>
      <span
        className="font-extrabold text-section-6-second-title text-28px"
        dangerouslySetInnerHTML={{ __html: informations.subTitleText }}
      />
      <span
        className="font-semibold text-section-6-content text-15px text-center"
        dangerouslySetInnerHTML={{ __html: informations.contentText }}
      />
      {informations.extraComponents ? (
        <div
          dangerouslySetInnerHTML={{ __html: informations.extraComponents }}
        />
      ) : null}
    </div>
  );
}
