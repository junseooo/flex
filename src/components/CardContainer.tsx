import { CardDefault } from "./CardDefault";
import { CardNoBottom } from "./CardNoBottom";
import { CardTopLeft } from "./CardTopLeft";

export interface CardContainerProps {
  section: number;
}

export interface IInformations {
  backgroundColor: string;
  text1: string;
  text2: string;
  textColor1: string;
  textColor2: string;
  imgContent: React.ReactNode;
  text3?: string;
  text4?: string;
  text5?: string;
  text6?: string;
  height?: number;
  pb?: number;
}

export function CardContainer({ section }: CardContainerProps) {
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
      return (
        <div>
          <CardTopLeft
            backgroundColor={"bg-section-6-1-background"}
            text1={"모든 HR 데이터가 flex에"}
            text2={
              "구성원의 개인정보, 인사정보와<br />근태, 급여, 계약기록을 flex 하나로<br />관리할 수 있습니다."
            }
            textColor1={"text-section-6-card-1-text-1"}
            textColor2={"text-section-6-card-1-text-2"}
            imgContent={
              <img
                data-component="landing-image"
                src="https://static.flex.team/v2/landing/home/corehr/img-core-1.png"
                srcSet="https://static.flex.team/v2/landing/home/corehr/img-core-1.png 1x, https://static.flex.team/v2/landing/home/corehr/img-core-1@2x.png 2x, https://static.flex.team/v2/landing/home/corehr/img-core-1@3x.png 3x"
                data-card="home-card"
                alt="Core hr flex"
              />
            }
            height={400}
          />
          <div style={{ height: "30px" }} />
          <CardNoBottom
            backgroundColor={"bg-section-6-2-background"}
            text1={"모든 HR 업무를 flex 하나로"}
            text2={
              "flex의 모든 기능은<br />구성원 데이터와 연동되어<br />유기적으로 동작합니다."
            }
            textColor1={"text-section-6-card-2-text-1"}
            textColor2={"text-section-6-card-2-text-2"}
            imgContent={
              <img
                width="200px"
                style={{ alignSelf: "center" }}
                data-component="landing-image"
                src="https://static.flex.team/v2/landing/home/corehr/img-core-2.png"
                srcSet="https://static.flex.team/v2/landing/home/corehr/img-core-2.png 1x, https://static.flex.team/v2/landing/home/corehr/img-core-2@2x.png 2x, https://static.flex.team/v2/landing/home/corehr/img-core-2@3x.png 3x"
                data-card="home-card"
                alt="All in one hr"
              />
            }
            height={400}
          />
        </div>
      );
    case 7:
      break;
    case 8:
      return (
        <CardTopLeft
          backgroundColor={"bg-section-8-background"}
          text1={"우리 회사, 잘 알고 있나요?"}
          text2={
            "생각만큼 잘 성장하고 있는지,<br />구성원이 어떻게 일하고 있는지,<br />궁금하지 않으세요?"
          }
          textColor1={"text-section-8-card-text-1"}
          textColor2={"text-section-8-card-text-2"}
          imgContent={
            <img
              data-component="landing-image"
              src="https://static.flex.team/v2/landing/home/insight/img-insight.png"
              srcSet="https://static.flex.team/v2/landing/home/insight/img-insight.png 1x, https://static.flex.team/v2/landing/home/insight/img-insight@2x.png 2x, https://static.flex.team/v2/landing/home/insight/img-insight@3x.png 3x"
              data-card="home-card"
              alt="인사이트"
            />
          }
          text3={"조직에 대한 고민이 있나요?"}
          text4={
            "근무시간, 휴가, 보상을<br />조직, 역할, 직책 별로<br />알아볼까요?"
          }
          text5={"꼭 필요한 데이터만"}
          text6={
            "최고의 HR 전문가가<br />선별한 32가지 항목으로<br />조직을 진단하세요."
          }
        />
      );
    case 9:
      return (
        <div>
          <CardDefault
            backgroundColor={"bg-section-9-card-1-background"}
            text1={"유연근무제를 고민하나요?"}
            text2={
              "일하는 방식의 급격한 변화.<br />유연근무제를 국내 법과<br />회사 문화에 맞게 운영해보세요."
            }
            textColor1={"text-section-9-card-1-text-1"}
            textColor2={"text-section-9-card-1-text-2"}
            imgContent={
              <img
                data-component="landing-image"
                src="https://static.flex.team/v2/landing/home/time-tracking/img-tt-1.png"
                srcSet="https://static.flex.team/v2/landing/home/time-tracking/img-tt-1.png 1x, https://static.flex.team/v2/landing/home/time-tracking/img-tt-1@2x.png 2x, https://static.flex.team/v2/landing/home/time-tracking/img-tt-1@3x.png 3x"
                data-card="home-card"
                alt="유연근무제를 고민 중"
              />
            }
            height={400}
          />
          <div style={{ height: "20px" }} />
          <CardNoBottom
            backgroundColor={"bg-section-9-card-2-background"}
            text1={"다양한 근무 유형이 있나요?"}
            text2={
              "세일즈, 생산직, 매장직 등<br />다양한 직종과 근무 유형이 있나요?<br />모두 flex에서 손쉽게 관리하세요."
            }
            textColor1={"text-section-9-card-2-text-1"}
            textColor2={"text-section-9-card-2-text-2"}
            imgContent={
              <img
                data-component="landing-image"
                src="https://static.flex.team/v2/landing/home/time-tracking/img-tt-2.png"
                srcSet="https://static.flex.team/v2/landing/home/time-tracking/img-tt-2.png 1x, https://static.flex.team/v2/landing/home/time-tracking/img-tt-2@2x.png 2x, https://static.flex.team/v2/landing/home/time-tracking/img-tt-2@3x.png 3x"
                data-card="home-card"
                alt="다양한 근무 유형"
              />
            }
            height={400}
          />
          <div style={{ height: "20px" }} />
          <CardNoBottom
            backgroundColor={"bg-section-9-card-3-background"}
            text1={"근로기준법이 어려운가요?"}
            text2={
              "주 52시간, 유연근무제, 주휴일 등의<br />적법/위법 여부를 설정 과정에서<br />직관적으로 알 수 있어요."
            }
            textColor1={"text-section-9-card-3-text-1"}
            textColor2={"text-section-9-card-3-text-2"}
            imgContent={
              <img
                data-component="landing-image"
                src="https://static.flex.team/v2/landing/home/time-tracking/img-tt-3.png"
                srcSet="https://static.flex.team/v2/landing/home/time-tracking/img-tt-3.png 1x, https://static.flex.team/v2/landing/home/time-tracking/img-tt-3@2x.png 2x, https://static.flex.team/v2/landing/home/time-tracking/img-tt-3@3x.png 3x"
                data-card="home-card"
                alt="근로기준법 설정"
              />
            }
            height={400}
          />
          <div style={{ height: "20px" }} />
          <CardNoBottom
            backgroundColor={"bg-section-9-card-4-background"}
            text1={"번아웃을 방지하는 근태관리"}
            text2={"구성원의 업무 강도를 파악해<br />번아웃 위험을 예방하세요."}
            textColor1={"text-section-9-card-4-text-1"}
            textColor2={"section-9-card-4-text-2-gradient"}
            imgContent={
              <img
                className="max-w-200px self-center"
                data-component="landing-image"
                src="https://static.flex.team/v2/landing/home/time-tracking/img-tt-4.png"
                srcSet="https://static.flex.team/v2/landing/home/time-tracking/img-tt-4.png 1x, https://static.flex.team/v2/landing/home/time-tracking/img-tt-4@2x.png 2x, https://static.flex.team/v2/landing/home/time-tracking/img-tt-4@3x.png 3x"
                data-card="home-card"
                alt="번아웃 방지"
              />
            }
            height={400}
          />
        </div>
      );
    case 10:
      return (
        <div className="flex flex-col flex-nowrap justify-start items-stretch gap-5 w-full">
          <CardNoBottom
            backgroundColor={"bg-section-10-card-1-background"}
            text1={"연차 부여와 소멸이 자동으로"}
            text2={
              "딱 한 번만 설정하세요. 번거로운 연차 업<br />무와 안녕입니다."
            }
            textColor1={"text-section-10-card-1-text-1"}
            textColor2={"text-section-10-card-1-text-2"}
            imgContent={
              <img
                data-component="landing-image"
                src="https://static.flex.team/v2/landing/home/annual-time-off/img-timeoff-1.png"
                srcSet="https://static.flex.team/v2/landing/home/annual-time-off/img-timeoff-1.png 1x, https://static.flex.team/v2/landing/home/annual-time-off/img-timeoff-1@2x.png 2x, https://static.flex.team/v2/landing/home/annual-time-off/img-timeoff-1@3x.png 3x"
                data-card="home-card"
                alt="연차 설정"
              />
            }
            height={350}
          />
          <CardDefault
            backgroundColor={"bg-section-10-card-2-background"}
            text1={"손쉬운 과거 연차 마이그레이션"}
            text2={"잔여 연차 갯수,<br />연차 사용 내역까지<br />동기화하세요."}
            textColor1={"text-section-10-card-1-text-1"}
            textColor2={"text-section-10-card-1-text-2"}
            imgContent={
              <img
                className="max-w-280px"
                data-component="landing-image"
                src="https://static.flex.team/v2/landing/home/annual-time-off/img-time-off-migrate.png"
                srcSet="https://static.flex.team/v2/landing/home/annual-time-off/img-time-off-migrate.png 1x, https://static.flex.team/v2/landing/home/annual-time-off/img-time-off-migrate@2x.png 2x, https://static.flex.team/v2/landing/home/annual-time-off/img-time-off-migrate@3x.png 3x"
                data-card="home-card"
                alt="연차 마이그레이션"
              />
            }
            height={350}
          />
          <CardNoBottom
            backgroundColor={"bg-section-10-card-3-background"}
            text1={"투명한 연차관리 업무"}
            text2={
              "연차 사용 내역, 잔여 연차를<br />구성원이 실시간으로 확인할 수 있어요."
            }
            textColor1={"text-section-10-card-1-text-1"}
            textColor2={"text-section-10-card-1-text-2"}
            imgContent={
              <img
                data-component="landing-image"
                src="https://static.flex.team/v2/landing/home/annual-time-off/img-timeoff-3.png"
                srcSet="https://static.flex.team/v2/landing/home/annual-time-off/img-timeoff-3.png 1x, https://static.flex.team/v2/landing/home/annual-time-off/img-timeoff-3@2x.png 2x, https://static.flex.team/v2/landing/home/annual-time-off/img-timeoff-3@3x.png 3x"
                data-card="home-card"
                alt="투명한 연차관리"
              />
            }
            height={350}
          />
        </div>
      );
    case 11:
      return (
        <div className="flex flex-col flex-nowrap justify-start items-stretch gap-5 w-full">
          <CardDefault
            backgroundColor={"bg-section-11-card-1-background"}
            text1={"최고의 전문가와 함께"}
            text2={
              "10년 이상 급여 업무를<br />당당한 페이롤 파트너스가<br />급여 업무를 도와드려요."
            }
            textColor1={"text-section-11-card-1-text-1"}
            textColor2={"text-section-11-card-1-text-2"}
            imgContent={
              <svg
                className="self-center"
                width="237px"
                height="117"
                viewBox="0 0 359 117"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50.6562 1.875V115H27.0625V24.2188H26.4375L0.5 40.4688V19.6875L28.4688 1.875H50.6562ZM116.012 116.562C87.6531 116.562 70.5437 95.4688 70.5437 58.4375C70.5437 21.4844 87.8094 0.3125 116.012 0.3125C144.216 0.3125 161.481 21.4844 161.481 58.4375C161.481 95.625 144.294 116.562 116.012 116.562ZM94.6062 58.4375C94.45 84.5312 102.887 97.1875 116.012 97.1875C129.137 97.1875 137.497 84.5312 137.419 58.4375C137.497 32.5781 129.059 19.6094 116.012 19.5312C102.966 19.6094 94.6062 32.5781 94.6062 58.4375ZM206.525 108.75V79.5312H177.306V60H206.525V30.7812H226.056V60H255.275V79.5312H226.056V108.75H206.525ZM306.1 116.719C284.694 116.641 269.538 98.5156 269.538 72.5C269.538 46.7969 285.709 29.0625 306.569 29.0625C320.319 29.0625 330.475 36.875 335.163 49.0625H335.553L339.538 30.1562H357.194L348.053 72.5781L358.288 115H340.475L336.022 95.625H335.475C330.944 107.656 321.413 116.875 306.1 116.719ZM292.038 72.3438C292.038 87.1875 299.069 97.8906 309.381 97.9688C321.413 97.8906 328.444 83.4375 330.631 72.8125L330.709 72.5781L330.631 72.3438C328.444 61.1719 322.975 47.5 310.163 47.5C298.913 47.5 292.038 57.8125 292.038 72.3438Z"
                  fill="url(#paint0_linear_4012_61285)"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_4012_61285"
                    x1="179"
                    y1="-46"
                    x2="179"
                    y2="129"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#61D0E5"></stop>
                    <stop offset="1" stop-color="#6196E5"></stop>
                  </linearGradient>
                </defs>
              </svg>
            }
            pb={42}
          />
          <CardDefault
            backgroundColor={"bg-section-11-card-2-background"}
            text1={"급여정산의 자동화"}
            text2={
              "구성원의 근무기록과 계약 조건에 맞춰<br />급여가 자동으로 정산됩니다."
            }
            textColor1={"text-section-11-card-2-text-1"}
            textColor2={"text-section-11-card-2-text-2"}
            imgContent={
              <img
                data-component="landing-image"
                src="https://static.flex.team/v2/landing/home/payroll/img-payroll-2.png"
                srcSet="https://static.flex.team/v2/landing/home/payroll/img-payroll-2.png 1x, https://static.flex.team/v2/landing/home/payroll/img-payroll-2@2x.png 2x, https://static.flex.team/v2/landing/home/payroll/img-payroll-2@3x.png 3x"
                data-card="home-card"
                alt="급여정산 자동화"
              />
            }
            height={350}
            pb={10}
          />
          <CardNoBottom
            backgroundColor={"bg-section-11-card-3-background"}
            text1={"급여명세서, 급여대장 발급까지"}
            text2={"자동으로 생성, 발급되고<br />법에 맞게 업데이트됩니다."}
            textColor1={"text-section-11-card-3-text-1"}
            textColor2={"text-section-11-card-3-text-2"}
            imgContent={
              <img
                data-component="landing-image"
                src="https://static.flex.team/v2/landing/home/payroll/img-payroll-3.png"
                srcSet="https://static.flex.team/v2/landing/home/payroll/img-payroll-3.png 1x, https://static.flex.team/v2/landing/home/payroll/img-payroll-3@2x.png 2x, https://static.flex.team/v2/landing/home/payroll/img-payroll-3@3x.png 3x"
                data-card="home-card"
                alt="급여명세서 발급"
              />
            }
            height={400}
          />
          <CardNoBottom
            backgroundColor={"bg-section-11-card-4-background"}
            text1={"원클릭<br />사회보험 신고"}
            text2={"4대 보험취득, 상실신고를<br />편리하게 진행하세요."}
            textColor1={"text-section-11-card-4-text-1"}
            textColor2={"text-section-11-card-4-text-2"}
            imgContent={
              <img
                className="max-w-240px self-center"
                data-component="landing-image"
                src="https://static.flex.team/v2/landing/home/payroll/img-payroll-4.png"
                srcSet="https://static.flex.team/v2/landing/home/payroll/img-payroll-4.png 1x, https://static.flex.team/v2/landing/home/payroll/img-payroll-4@2x.png 2x, https://static.flex.team/v2/landing/home/payroll/img-payroll-4@3x.png 3x"
                data-card="home-card"
                alt="사회보험 신고"
              />
            }
            height={400}
          />
        </div>
      );
    case 12:
      return <div></div>;
    default:
      return <></>;
  }
  return <></>;
}
