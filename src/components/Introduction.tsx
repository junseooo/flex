import { ReactNode } from "react";
import parse from "html-react-parser";

interface IntroductionProps {
  section: number;
}

interface IInformations {
  svgContent: ReactNode;
  titleText: string;
  subTitleText: string;
  contentText: string;
  extraComponents?: ReactNode;
}

export function Introduction({ section }: IntroductionProps) {
  const informations: IInformations = {
    svgContent: null,
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
      informations.svgContent = (
        <svg
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
        </svg>
      );
      informations.titleText = "인사정보 관리";
      informations.subTitleText = "하나의 플랫폼<br />모두의 데이터";
      informations.contentText =
        "근태, 급여, 계약, 결재, 채용, 평가 목표관리.<br />모든 업무 관리와 데이터 관리, 이제는 flex에서";
      break;
    case 7:
      informations.svgContent = (
        <svg
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
        </svg>
      );
      informations.titleText = "보안";
      informations.subTitleText = "flex와 함께<br />안전한 고객 데이터";
      informations.contentText =
        "중요한 HR 데이터를 다루는 플랫폼, 선택의 기준은 보안입니다.";
      informations.extraComponents = (
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
      );
      break;
    case 8:
      informations.svgContent = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          className="flex-shrink:0"
        >
          <linearGradient
            id="flex-gradient-svg-flame-:R2lak76:"
            gradientTransform="rotate(4.77)"
          >
            <stop offset="0%" stop-color="#f96919"></stop>
            <stop offset="100%" stop-color="#FB60BD"></stop>
          </linearGradient>
          <linearGradient
            id="flex-gradient-svg-magic-:R2lak76:"
            gradientTransform="rotate(4.77)"
          >
            <stop offset="0%" stop-color="#a348ff"></stop>
            <stop offset="100%" stop-color="#6066FF"></stop>
          </linearGradient>
          <linearGradient
            id="flex-gradient-svg-tropical-:R2lak76:"
            gradientTransform="rotate(4.77)"
          >
            <stop offset="0%" stop-color="#04CC00"></stop>
            <stop offset="100%" stop-color="#12C2CD"></stop>
          </linearGradient>
          <linearGradient
            id="flex-gradient-svg-mango-:R2lak76:"
            gradientTransform="rotate(4.77)"
          >
            <stop offset="0%" stop-color="#FA9E00"></stop>
            <stop offset="100%" stop-color="#FF8E26"></stop>
          </linearGradient>
          <path
            fill="url(#flex-gradient-svg-magic-:R2lak76:)"
            d="M8.04 2.75h7.92c.755 0 1.372 0 1.874.041.52.042.988.133 1.426.356.686.35 1.243.907 1.593 1.593.223.438.314.907.356 1.426.041.502.041 1.12.041 1.875v7.919c0 .755 0 1.372-.041 1.874-.042.52-.133.988-.356 1.426a3.644 3.644 0 0 1-1.593 1.593c-.438.223-.907.314-1.426.356-.502.041-1.12.041-1.874.041H8.04c-.754 0-1.372 0-1.874-.041-.52-.042-.988-.133-1.426-.356a3.644 3.644 0 0 1-1.593-1.593c-.223-.438-.314-.907-.356-1.426-.041-.502-.041-1.12-.041-1.874V8.04c0-.754 0-1.372.041-1.874.042-.52.133-.988.356-1.426A3.644 3.644 0 0 1 4.74 3.147c.438-.223.907-.314 1.426-.356.502-.041 1.12-.041 1.875-.041ZM6.304 4.467c-.415.034-.638.096-.8.179-.369.188-.67.488-.857.857-.083.162-.145.385-.179.8-.035.425-.035.974-.035 1.773v7.848c0 .799 0 1.348.035 1.773.034.415.096.638.179.8.188.369.488.67.857.857.162.083.385.145.8.179.425.034.974.035 1.773.035h7.848c.799 0 1.348 0 1.773-.035.415-.034.638-.096.8-.179.369-.188.67-.488.857-.857.083-.162.145-.385.179-.8.034-.425.035-.974.035-1.773V8.076c0-.799 0-1.348-.035-1.773-.034-.415-.096-.638-.179-.8a1.962 1.962 0 0 0-.857-.857c-.162-.083-.385-.145-.8-.179-.425-.035-.974-.035-1.773-.035H8.076c-.799 0-1.348 0-1.773.035ZM12 6.487a.84.84 0 0 1 .84.841v9.344a.84.84 0 0 1-1.68 0V7.328a.84.84 0 0 1 .84-.84Zm3.737 3.738a.84.84 0 0 1 .841.84v5.607a.84.84 0 0 1-1.681 0v-5.606a.84.84 0 0 1 .84-.841Zm-7.474 1.868a.84.84 0 0 1 .84.841v3.738a.84.84 0 0 1-1.681 0v-3.738a.84.84 0 0 1 .84-.84Z"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      );
      informations.titleText = "인사이트";
      informations.subTitleText = "HR, 이제 감이 아닌 데이터로.";
      informations.contentText =
        "채용, 온보딩, 보상, 리텐션까지<br />HR 문제를 미리 발견하고 해결하세요.";
      break;
    case 9:
      informations.svgContent = (
        <svg
          width="24"
          height="24"
          viewBox="0 0 35 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 33.5952C25.8531 33.5952 33.0161 26.4322 33.0161 17.5952C33.0161 8.7421 25.8692 1.59521 17.0161 1.59521C15.9215 1.59521 15.2294 2.23908 15.2294 3.30145V8.56503C15.2294 9.46644 15.8732 10.1747 16.7907 10.1747C17.6922 10.1747 18.336 9.46644 18.336 8.56503V5.37791C24.4849 6.05397 29.2012 11.2532 29.2012 17.5952C29.2012 24.3397 23.7928 29.7964 17 29.7964C10.2233 29.7964 4.79879 24.3397 4.79879 17.5952C4.81489 14.8105 5.76459 12.1868 7.37425 10.1425C8.0825 9.11232 8.24346 8.14652 7.40644 7.34169C6.58551 6.55296 5.28169 6.64954 4.44467 7.7763C2.30382 10.4805 1 13.9091 1 17.5952C1 26.4322 8.16298 33.5952 17 33.5952ZM19.4789 20.1063C20.7988 18.722 20.5252 16.8065 18.9477 15.7602L11.5915 10.8025C10.497 10.0942 9.4829 11.1083 10.2072 12.2029L15.1489 19.559C16.1952 21.1204 18.1107 21.4262 19.4789 20.1063Z"
            fill="#916DF6"
          ></path>
        </svg>
      );
      informations.titleText = "근태관리";
      informations.subTitleText =
        "회사 문화와 일하는 방식,<br />그리고 국내 법에 맞게";
      informations.contentText =
        "불편한 근태관리만큼 구성원 모두에게<br />번거로운 일도 없습니다.";
      break;
    case 10:
      informations.svgContent = (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 35 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.42526 5.60296C2.11731 7.00916 2 8.87927 2 10.155C2 20.7088 8.40823 27.6673 18.1746 27.6673C22.8964 27.6673 25.6973 25.6522 27.1783 24.1011C28.2781 25.6957 28.8647 27.3484 29.5686 29.5664C29.8032 30.2768 30.3165 30.5957 30.9177 30.5957C32.0762 30.5957 33 29.6099 33 28.2762C33 26.3336 30.1112 22.9268 28.6301 21.5641C22.3098 15.7653 12.7635 19.3026 10.4905 13.1124C10.3292 12.7065 10.7545 12.431 11.0918 12.7789C15.9309 17.8674 22.4272 13.6633 28.3661 19.0416C28.982 19.5925 29.7592 19.3316 29.8765 18.6792C29.9499 18.2878 29.9792 17.6644 29.9792 17.0121C29.9792 10.242 25.2867 6.66124 18.2185 6.66124C15.9163 6.66124 13.2327 7.25561 11.1651 7.25561C8.98013 7.25561 6.51656 7.11064 4.4929 5.03758C3.7597 4.29823 2.68921 4.48669 2.42526 5.60296Z"
            fill="#25E67E"
          ></path>
        </svg>
      );
      informations.titleText = "연차관리";
      informations.subTitleText = "연차관리의 완벽한 자동화";
      informations.contentText = "세상에, 아직 연차를 엑셀로 운영하세요?";
      break;
    case 11:
      informations.svgContent = (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.1686 19.0446C4.36664 19.0446 5.30687 18.074 5.30687 16.876V15.8296C5.30687 13.2819 6.99019 11.7502 9.75022 11.7502H20.5781V14.8894C20.5781 15.8751 21.1695 16.4817 22.1401 16.4817C22.6102 16.4817 22.959 16.3301 23.2623 16.0874L29.4344 10.8555C30.1624 10.2337 30.1624 9.23283 29.4344 8.62623L23.2623 3.40946C22.959 3.15165 22.6102 3 22.1401 3C21.1695 3 20.5781 3.6066 20.5781 4.59233V7.53434H9.96253C4.41213 7.53434 1 10.446 1 15.2382V16.876C1 18.074 1.97056 19.0446 3.1686 19.0446ZM32.8466 16.7547C31.6485 16.7547 30.6931 17.7101 30.6931 18.9081V19.9545C30.6931 22.5022 29.0098 24.0339 26.2498 24.0339H15.4219V20.8644C15.4219 19.8787 14.8305 19.2872 13.8599 19.2872C13.405 19.2872 13.041 19.4389 12.7529 19.6815L6.56557 24.9135C5.83765 25.5352 5.85281 26.5361 6.56557 27.1427L12.7529 32.3595C13.041 32.6021 13.405 32.769 13.8599 32.769C14.8305 32.769 15.4219 32.1624 15.4219 31.1766V28.2498H26.0526C31.5879 28.2498 35 25.3381 35 20.5459V18.9081C35 17.7101 34.0446 16.7547 32.8466 16.7547Z"
            fill="#2FCDFF"
          ></path>
        </svg>
      );
      informations.titleText = "급여정산";
      informations.subTitleText =
        "상상해보셨나요?<br />근태와 연동되는 급여정산!";
      informations.contentText =
        "입사와 퇴사, 근태기록과 연동되는 급여정산<br />일일이 취합하지 말고 한눈에 확인하세요.";
      break;
    default:
      break;
  }
  return (
    <div className="flex flex-col flex-nowrap justify-center items-center gap-3 text-center self-center">
      <div className="flex flex-row flex-nowrap justify-center items-center gap-2">
        {informations.svgContent}
        <span className="font-bold text-introduction-title text-17px tracking-section-6-title">
          {informations.titleText}
        </span>
      </div>
      <span className="font-extrabold text-introduction-second-title text-28px">
        {parse(informations.subTitleText)}
      </span>
      <span className="font-semibold text-introduction-content text-15px text-center">
        {parse(informations.contentText)}
      </span>
      {informations.extraComponents ? informations.extraComponents : null}
    </div>
  );
}
