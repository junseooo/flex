import { CardBasis } from "./CardBasis";

export interface CardContainerProps {
  section: number;
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
        <>
          <CardBasis
            backgroundColor={"bg-section-6-card-1-background"}
            text1={"모든 HR 데이터가 flex에"}
            text2={
              "구성원의 개인정보, 인사정보와<br />근태, 급여, 계약기록을 flex 하나로<br />관리할 수 있습니다."
            }
            textColor1={"text-section-6-card-1-text-1"}
            textColor2={"text-section-6-card-1-text-2"}
            imgContent={
              <img
                className="max-w-360px"
                data-component="landing-image"
                src="https://static.flex.team/v2/landing/home/corehr/img-core-1.png"
                srcSet="https://static.flex.team/v2/landing/home/corehr/img-core-1.png 1x, https://static.flex.team/v2/landing/home/corehr/img-core-1@2x.png 2x, https://static.flex.team/v2/landing/home/corehr/img-core-1@3x.png 3x"
                data-card="home-card"
                alt="Core hr flex"
              />
            }
            height={400}
            pr={0}
          />
          <CardBasis
            backgroundColor={"bg-section-6-card-2-background"}
            text1={"모든 HR 업무를 flex 하나로"}
            text2={
              "flex의 모든 기능은<br />구성원 데이터와 연동되어<br />유기적으로 동작합니다."
            }
            textColor1={"text-section-6-card-2-text-1"}
            textColor2={"text-section-6-card-2-text-2"}
            imgContent={
              <img
                className="max-w-200px self-center"
                data-component="landing-image"
                src="https://static.flex.team/v2/landing/home/corehr/img-core-2.png"
                srcSet="https://static.flex.team/v2/landing/home/corehr/img-core-2.png 1x, https://static.flex.team/v2/landing/home/corehr/img-core-2@2x.png 2x, https://static.flex.team/v2/landing/home/corehr/img-core-2@3x.png 3x"
                data-card="home-card"
                alt="All in one hr"
              />
            }
            height={400}
          />
        </>
      );
    case 7:
      break;
    case 8:
      return (
        <CardBasis
          backgroundColor={"bg-section-8-card-background"}
          text1={"우리 회사, 잘 알고 있나요?"}
          text2={
            "생각만큼 잘 성장하고 있는지,<br />구성원이 어떻게 일하고 있는지,<br />궁금하지 않으세요?"
          }
          textColor1={"text-section-8-card-text-1"}
          textColor2={"text-section-8-card-text-2"}
          imgContent={
            <img
              className="max-w-388px translate-y-10px"
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
          gap={34}
          width={"full"}
          pr={0}
        />
      );
    case 9:
      return (
        <>
          <CardBasis
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
            pb={30}
          />
          <CardBasis
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
          <CardBasis
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
          <CardBasis
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
            width={"full"}
          />
        </>
      );
    case 10:
      return (
        <div className="flex flex-col flex-nowrap justify-start items-stretch gap-5 w-full">
          <CardBasis
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
          <CardBasis
            backgroundColor={"bg-section-10-card-2-background"}
            text1={"손쉬운 과거 연차 마이그레이션"}
            text2={"잔여 연차 갯수,<br />연차 사용 내역까지<br />동기화하세요."}
            textColor1={"text-section-10-card-2-text-1"}
            textColor2={"text-section-10-card-2-text-2"}
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
            pb={30}
          />
          <CardBasis
            backgroundColor={"bg-section-10-card-3-background"}
            text1={"투명한 연차관리 업무"}
            text2={
              "연차 사용 내역, 잔여 연차를<br />구성원이 실시간으로 확인할 수 있어요."
            }
            textColor1={"text-section-10-card-3-text-1"}
            textColor2={"text-section-10-card-3-text-2"}
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
          <CardBasis
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
            height={350}
            pb={42}
          />
          <CardBasis
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
          <CardBasis
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
          <CardBasis
            backgroundColor={"bg-section-11-card-4-background"}
            text1={"원클릭<br />사회보험 신고"}
            text2={"<br />4대 보험취득, 상실신고를<br />편리하게 진행하세요."}
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
      return (
        <>
          <CardBasis
            backgroundColor={"bg-section-12-card-1-background"}
            text1={"10년 넘게 일하면서<br />이런 연말정산은 처음 봤어요"}
            text2={"4대 보험취득, 상실신고를<br />편리하게 진행하세요."}
            textColor1={"text-section-12-card-1-text-1"}
            textColor2={"text-section-12-card-1-text-2"}
            imgContent={
              <img
                data-component="landing-image"
                src="https://static.flex.team/v2/landing/home/yes/img-yes-1.png"
                srcSet="https://static.flex.team/v2/landing/home/yes/img-yes-1.png 1x, https://static.flex.team/v2/landing/home/yes/img-yes-1@2x.png 2x, https://static.flex.team/v2/landing/home/yes/img-yes-1@3x.png 3x"
                data-card="home-card"
                alt="쉬운 연말 정산"
              />
            }
            height={400}
            extraSvgContent={
              <svg
                width="34"
                height="23"
                viewBox="0 0 34 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_4012_61330)">
                  <path
                    d="M8.13797 22.5957C9.4226 22.5957 10.5937 22.3209 11.6513 21.7771C12.7089 21.2334 13.5573 20.4566 14.1907 19.4588C14.824 18.455 15.1407 17.2959 15.1407 15.9754C15.1407 14.0694 14.5551 12.5338 13.39 11.3687C12.2249 10.2035 10.767 9.61797 9.0163 9.61797C7.82727 9.61797 6.81151 9.91672 5.96904 10.5083C5.12059 11.0998 4.51711 12.0199 4.14666 13.2627L4.70234 13.4659C4.78001 11.8108 5.18034 10.3529 5.89734 9.09217C6.61434 7.82547 7.59424 6.82167 8.83107 6.07479C10.0679 5.32791 11.49 4.90369 13.1032 4.80809C13.6649 4.79016 14.1429 4.58104 14.5312 4.18071C14.9196 3.78039 15.1168 3.30836 15.1168 2.76463C15.1168 2.08348 14.8658 1.55171 14.358 1.17528C13.8501 0.786904 13.2167 0.595703 12.4579 0.595703C10.2591 0.595703 8.21564 1.16333 6.33351 2.30456C4.44541 3.43981 2.92178 4.99929 1.75068 6.97104C0.585551 8.9428 0 11.1655 0 13.6392C0 16.3638 0.782727 18.5327 2.34818 20.1579C3.91363 21.7831 5.84356 22.5957 8.13797 22.5957ZM26.3737 22.5957C27.6404 22.5957 28.8055 22.3209 29.8751 21.7771C30.9446 21.2334 31.793 20.4566 32.4264 19.4588C33.0597 18.455 33.3764 17.2959 33.3764 15.9754C33.3764 14.0694 32.7968 12.5338 31.6377 11.3687C30.4785 10.2035 29.0147 9.61797 27.2461 9.61797C26.057 9.61797 25.0413 9.91672 24.1809 10.5083C23.3265 11.0998 22.723 12.0199 22.3704 13.2627L22.9261 13.4659C23.0038 11.8108 23.4041 10.3469 24.1211 9.07425C24.8381 7.80157 25.818 6.79179 27.0549 6.05687C28.2917 5.31596 29.7078 4.89771 31.2971 4.80211C31.9066 4.77821 32.3965 4.56909 32.7789 4.16876C33.1553 3.76844 33.3465 3.29641 33.3465 2.75268C33.3465 2.07153 33.0956 1.53976 32.5877 1.16333C32.0798 0.786904 31.4525 0.595703 30.6936 0.595703C28.4948 0.595703 26.4514 1.16333 24.5693 2.30456C22.6812 3.43981 21.1575 4.99929 19.9864 6.97104C18.8213 8.9428 18.2357 11.1655 18.2357 13.6392C18.2357 16.3638 19.0125 18.5327 20.572 20.1579C22.1255 21.7831 24.0614 22.5957 26.3737 22.5957Z"
                    fill="#CD6466"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_4012_61330">
                    <rect
                      width="33.3764"
                      height="22"
                      fill="white"
                      transform="translate(0 0.595703)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            }
          />
          <CardBasis
            backgroundColor={"bg-section-12-card-2-background"}
            text1={"담당자가 만족하는 연말정산"}
            text2={
              "대상자 관리와 신고,<br />자료 검토와 수정을 대시보드에서<br />한눈에 파악하고 진행하세요."
            }
            textColor1={"text-section-12-card-2-text-1"}
            textColor2={"text-section-12-card-2-text-2"}
            imgContent={
              <img
                data-component="landing-image"
                src="https://static.flex.team/v2/landing/home/yes/img-yes-2.png"
                srcSet="https://static.flex.team/v2/landing/home/yes/img-yes-2.png 1x, https://static.flex.team/v2/landing/home/yes/img-yes-2@2x.png 2x, https://static.flex.team/v2/landing/home/yes/img-yes-2@3x.png 3x"
                data-card="home-card"
                alt="담당자가 만족하는 연말정산"
              />
            }
            height={400}
          />
        </>
      );
    case 13:
      return (
        <>
          <CardBasis
            backgroundColor={"bg-section-13-card-1-background"}
            text1={"사용하던 종이 계약서를<br />구성원 데이터와 연동되는"}
            text2={"전자계약 서식으로 바꿔보세요."}
            textColor1={"text-section-13-card-1-text-1"}
            textColor2={"text-section-13-card-1-text-2"}
            imgContent={
              <img
                data-component="landing-image"
                src="https://static.flex.team/v2/landing/home/digicon/img-digicon-1.png"
                srcSet="https://static.flex.team/v2/landing/home/digicon/img-digicon-1.png 1x, https://static.flex.team/v2/landing/home/digicon/img-digicon-1@2x.png 2x, https://static.flex.team/v2/landing/home/digicon/img-digicon-1@3x.png 3x"
                data-card="home-card"
                alt="전자계약서"
              />
            }
            height={400}
            text3={"각자에 맞는 맞춤 계약서로"}
            text4={"대량 계약 체결도 클릭 한 번에."}
          />
          <CardBasis
            backgroundColor={"bg-section-13-card-2-background"}
            text1={"담당자가 만족하는 연말정산"}
            text2={
              "대상자 관리와 신고,<br />자료 검토와 수정을 대시보드에서<br />한눈에 파악하고 진행하세요."
            }
            textColor1={"text-section-13-card-2-text-1"}
            textColor2={"text-section-13-card-2-text-2"}
            imgContent={
              <img
                data-component="landing-image"
                src="https://static.flex.team/v2/landing/home/digicon/img-digicon-2.png"
                srcSet="https://static.flex.team/v2/landing/home/digicon/img-digicon-2.png 1x, https://static.flex.team/v2/landing/home/digicon/img-digicon-2@2x.png 2x, https://static.flex.team/v2/landing/home/digicon/img-digicon-2@3x.png 3x"
                data-card="home-card"
                alt="계약 서식 템플릿"
              />
            }
            height={400}
          />
        </>
      );
    case 14:
      return (
        <>
          <CardBasis
            backgroundColor={"bg-section-14-card-1-background"}
            text1={"구성원 온보딩을 똑똑하게, 자동발송"}
            text2={
              "입사일에 맞춰 물 흐르듯 자연스러운<br />온보딩 프로세스를 구축하세요"
            }
            textColor1={"text-section-14-card-1-text-1"}
            textColor2={"text-section-14-card-1-text-2"}
            imgContent={
              <img
                data-component="landing-image"
                src="https://static.flex.team/v2/landing/home/workflow/img-workflow-1.png"
                srcSet="https://static.flex.team/v2/landing/home/workflow/img-workflow-1.png 1x, https://static.flex.team/v2/landing/home/workflow/img-workflow-1@2x.png 2x, https://static.flex.team/v2/landing/home/workflow/img-workflow-1@3x.png 3x"
                data-card="home-card"
                alt="자동 발송"
              />
            }
            height={400}
          />
          <CardBasis
            backgroundColor={"bg-section-14-card-2-background"}
            text1={"일하는 방식에 맞게 세팅하세요"}
            text2={
              "구매신청, 비용 집행 요청 등<br />14종의 기본 문서 템플릿과<br />자유로운 커스텀 양식을<br />지원합니다."
            }
            textColor1={"text-section-14-card-2-text-1"}
            textColor2={"text-section-14-card-2-text-2"}
            imgContent={
              <img
                data-component="landing-image"
                src="https://static.flex.team/v2/landing/home/workflow/img-workflow-2.png"
                srcSet="https://static.flex.team/v2/landing/home/workflow/img-workflow-2.png 1x, https://static.flex.team/v2/landing/home/workflow/img-workflow-2@2x.png 2x, https://static.flex.team/v2/landing/home/workflow/img-workflow-2@3x.png 3x"
                data-card="home-card"
                alt="다양한 양식"
              />
            }
            height={400}
          />
        </>
      );
    case 15:
      return (
        <>
          <CardBasis
            backgroundColor={"bg-section-15-card-1-background"}
            text1={"평가가 처음인가요?<br />기존 방식을 바꾸고 싶나요?"}
            text2={"글로벌 스탠다드를 참고한<br />평가 템플릿을 확인하세요."}
            textColor1={"text-section-15-card-1-text-1"}
            textColor2={"text-section-15-card-1-text-2"}
            imgContent={
              <img
                data-component="landing-image"
                src="https://static.flex.team/v2/landing/home/review/img-review-1.png"
                srcSet="https://static.flex.team/v2/landing/home/review/img-review-1.png 1x, https://static.flex.team/v2/landing/home/review/img-review-1@2x.png 2x, https://static.flex.team/v2/landing/home/review/img-review-1@3x.png 3x"
                data-card="home-card"
                alt="평가 템플릿"
              />
            }
            height={350}
            pb={30}
            width={"full"}
          />
          <CardBasis
            backgroundColor={"bg-section-15-card-2-background"}
            text1={"평가, 눈 깜짝할 사이 준비 끝"}
            text2={
              "평가 대상자와 평가자를 평가 방식에 맞게<br />자동으로 매칭합니다."
            }
            textColor1={"text-section-15-card-2-text-1"}
            textColor2={"text-section-15-card-2-text-2"}
            imgContent={
              <img
                data-component="landing-image"
                src="https://static.flex.team/v2/landing/home/review/img-review-2.png"
                srcSet="https://static.flex.team/v2/landing/home/review/img-review-2.png 1x, https://static.flex.team/v2/landing/home/review/img-review-2@2x.png 2x, https://static.flex.team/v2/landing/home/review/img-review-2@3x.png 3x"
                data-card="home-card"
                alt="평가자 자동 매칭"
              />
            }
            height={350}
          />
          <CardBasis
            backgroundColor={"bg-section-15-card-3-background"}
            text1={"구성원을 춤추게 하는<br />인정과 피드백으로"}
            text2={
              "상시적인 피드백 문화를 만들어보세요.<br />구성원의 동기부여와<br />직원경험이 향상됩니다."
            }
            textColor1={"text-section-15-card-3-text-1"}
            textColor2={"text-section-15-card-3-text-2"}
            imgContent={
              <img
                data-component="landing-image"
                src="https://static.flex.team/v2/landing/home/review/img-review-3.png"
                srcSet="https://static.flex.team/v2/landing/home/review/img-review-3.png 1x, https://static.flex.team/v2/landing/home/review/img-review-3@2x.png 2x, https://static.flex.team/v2/landing/home/review/img-review-3@3x.png 3x"
                data-card="home-card"
                alt="구성원 인정과 피드백"
              />
            }
            height={400}
            extraSvgContent={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="62"
                height="56"
                viewBox="0 0 62 56"
                fill="none"
              >
                <g clip-path="url(#clip0_4012_61930)">
                  <path
                    d="M29 46.1671C45.0163 46.1671 58 35.9656 58 23.3814C58 10.7972 45.0163 0.595703 29 0.595703C12.9837 0.595703 0 10.7972 0 23.3814C0 30.6237 4.3003 37.0768 11.0041 41.2504C9.88657 44.4877 8.35968 47.7139 7.29342 49.8189C6.89176 50.6118 7.69212 51.4809 8.49555 51.1007C11.2334 49.8051 15.7108 47.4928 19.0831 44.8001C22.1771 45.6846 25.5168 46.1671 29 46.1671Z"
                    fill="#CA7552"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_4012_61930">
                    <rect
                      width="62"
                      height="54.619"
                      fill="white"
                      transform="translate(0 0.595703)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            }
          />
        </>
      );
    case 16:
      return (
        <>
          <CardBasis
            backgroundColor={"bg-section-16-card-1-background"}
            text1={"목표 점검도 손쉽게"}
            text2={"진척도와 함께 진행 상태도<br />함께 파악하세요."}
            textColor1={"text-section-16-card-1-text-1"}
            textColor2={"text-section-16-card-1-text-2"}
            imgContent={
              <img
                data-component="landing-image"
                src="https://static.flex.team/v2/landing/home/goal/img-progress-list.png"
                srcSet="https://static.flex.team/v2/landing/home/goal/img-progress-list.png 1x, https://static.flex.team/v2/landing/home/goal/img-progress-list@2x.png 2x, https://static.flex.team/v2/landing/home/goal/img-progress-list@3x.png 3x"
                data-card="home-card"
                alt="손쉬운 목표 점검"
              />
            }
            height={350}
          />
          <CardBasis
            backgroundColor={"bg-section-16-card-2-background"}
            text1={"투명하고 직관적인 전사 목표"}
            text2={"회사, 팀, 개인의 목표를 한 눈에<br />확인할 수 있어요."}
            textColor1={"text-section-16-card-2-text-1"}
            textColor2={"text-section-16-card-2-text-2"}
            imgContent={
              <img
                data-component="landing-image"
                src="https://static.flex.team/v2/landing/home/goal/img-goal-list-1.png"
                srcSet="https://static.flex.team/v2/landing/home/goal/img-goal-list-1.png 1x, https://static.flex.team/v2/landing/home/goal/img-goal-list-1@2x.png 2x, https://static.flex.team/v2/landing/home/goal/img-goal-list-1@3x.png 3x"
                data-card="home-card"
                alt="투명한 전사 목표"
              />
            }
            height={350}
          />
        </>
      );
    case 17:
      return (
        <>
          <CardBasis
            backgroundColor={"bg-section-17-card-1-background"}
            text1={"누가 만들어도 멋진<br />우리 회사만의 채용 사이트"}
            text2={"디자인과 개발을 몰라도<br />손쉬운 블럭 조합으로 완성."}
            textColor1={"text-section-17-card-1-text-1"}
            textColor2={"text-section-17-card-1-text-2"}
            imgContent={
              <svg
                className="self-center"
                width="290"
                height="79"
                viewBox="0 0 361 79"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.2031 77.0156L0.390625 0.65625H21.4844L33.4375 52.2656H34.1406L46.6562 0.65625H67.3281L79.9844 51.9844H80.6875L92.5 0.65625H113.594L92.6406 77.0156H70.7031L57.4844 28.5H56.5L43.2812 77.0156H21.2031ZM134.868 77.0156L114.055 0.65625H135.149L147.102 52.2656H147.805L160.321 0.65625H180.993L193.649 51.9844H194.352L206.164 0.65625H227.258L206.305 77.0156H184.368L171.149 28.5H170.164L156.946 77.0156H134.868ZM248.532 77.0156L227.719 0.65625H248.813L260.766 52.2656H261.469L273.985 0.65625H294.657L307.313 51.9844H308.016L319.829 0.65625H340.923L319.969 77.0156H298.032L284.813 28.5H283.829L270.61 77.0156H248.532ZM348.978 78.2812C342.368 78.2812 337.024 73.0078 337.165 66.4688C337.024 60 342.368 54.7266 348.978 54.7969C355.235 54.7266 360.649 60 360.649 66.4688C360.649 73.0078 355.235 78.2812 348.978 78.2812Z"
                  fill="url(#paint0_linear_4012_61960)"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_4012_61960"
                    x1="184"
                    y1="-52.9844"
                    x2="184"
                    y2="122.016"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#C361E5"></stop>
                    <stop offset="1" stop-color="#417EDB"></stop>
                  </linearGradient>
                </defs>
              </svg>
            }
            height={350}
            width={"full"}
            pb={30}
          />
          <CardBasis
            backgroundColor={"bg-section-17-card-2-background"}
            text1={"합격자 데이터 연동"}
            text2={
              "flex 안에서 합격과 인사를 동시에<br />클릭 몇 번으로 손쉽게 연동하세요."
            }
            textColor1={"text-section-17-card-2-text-1"}
            textColor2={"section-17-card-2-text-2-gradient"}
            imgContent={
              <img
                data-component="landing-image"
                src="https://static.flex.team/v2/landing/home/recruiting/img-recruiting-passed-user.png"
                srcSet="https://static.flex.team/v2/landing/home/recruiting/img-recruiting-passed-user.png 1x, https://static.flex.team/v2/landing/home/recruiting/img-recruiting-passed-user@2x.png 2x, https://static.flex.team/v2/landing/home/recruiting/img-recruiting-passed-user@3x.png 3x"
                data-card="home-card"
                alt="합격자 데이터 연동"
              />
            }
            height={350}
            pr={0}
            pl={0}
          />
          <CardBasis
            backgroundColor={"bg-section-17-card-3-background"}
            text1={"체크리스트"}
            text2={"놓칠까봐 걱정하지 마세요<br />체크리스트가 다 알려주니까"}
            textColor1={"text-section-17-card-3-text-1"}
            textColor2={"section-17-card-3-text-2-gradient"}
            imgContent={
              <img
                data-component="landing-image"
                src="https://static.flex.team/v2/landing/home/recruiting/img-recruiting-1.png"
                srcSet="https://static.flex.team/v2/landing/home/recruiting/img-recruiting-1.png 1x, https://static.flex.team/v2/landing/home/recruiting/img-recruiting-1@2x.png 2x, https://static.flex.team/v2/landing/home/recruiting/img-recruiting-1@3x.png 3x"
                data-card="home-card"
                alt="똑똑한 체크리스트"
              />
            }
            height={350}
            pb={30}
            gap={36}
          />
          <CardBasis
            backgroundColor={"bg-section-17-card-4-background"}
            text1={"대량업무 처리"}
            text2={"몇 명이든<br />한 번의 클릭으로"}
            textColor1={"text-section-17-card-4-text-1"}
            textColor2={"text-section-17-card-4-text-2"}
            imgContent={
              <img
                data-component="landing-image"
                src="https://static.flex.team/v2/landing/home/recruiting/img-recruiting-3.png"
                srcSet="https://static.flex.team/v2/landing/home/recruiting/img-recruiting-3.png 1x, https://static.flex.team/v2/landing/home/recruiting/img-recruiting-3@2x.png 2x, https://static.flex.team/v2/landing/home/recruiting/img-recruiting-3@3x.png 3x"
                data-card="home-card"
                alt="대량 처리"
              />
            }
            height={350}
            pb={30}
          />
        </>
      );
    case 18:
      return (
        <>
          <CardBasis
            backgroundColor={"bg-section-18-card-1-background"}
            text1={"시작이 어려운가요?"}
            text2={
              "전문가가 엄선한 샘플 질문과<br />상황별 추천 배너의 도움을 받아보세요."
            }
            textColor1={"text-section-18-card-1-text-1"}
            textColor2={"text-section-18-card-1-text-2"}
            imgContent={
              <img
                data-component="landing-image"
                src="https://static.flex.team/v2/landing/home/one-on-one/img-one-on-one-1.png"
                srcSet="https://static.flex.team/v2/landing/home/one-on-one/img-one-on-one-1.png 1x, https://static.flex.team/v2/landing/home/one-on-one/img-one-on-one-1@2x.png 2x, https://static.flex.team/v2/landing/home/one-on-one/img-one-on-one-1@3x.png 3x"
                data-card="home-card"
                alt="샘플 질문"
              />
            }
            height={400}
            pb={30}
          />
          <CardBasis
            backgroundColor={"bg-section-18-card-2-background"}
            text1={"도움이 되는 정보를 한눈에"}
            text2={
              "담당하는 목표, 받은 리뷰,<br />그리고 꼭 알아야 하는 정보까지"
            }
            textColor1={"text-section-18-card-2-text-1"}
            textColor2={"text-section-18-card-2-text-2"}
            imgContent={
              <img
                data-component="landing-image"
                src="https://static.flex.team/v2/landing/home/one-on-one/img-one-on-one-2.png"
                srcSet="https://static.flex.team/v2/landing/home/one-on-one/img-one-on-one-2.png 1x, https://static.flex.team/v2/landing/home/one-on-one/img-one-on-one-2@2x.png 2x, https://static.flex.team/v2/landing/home/one-on-one/img-one-on-one-2@3x.png 3x"
                data-card="home-card"
                alt="구성원 정보"
              />
            }
            height={400}
          />
          <CardBasis
            backgroundColor={"bg-section-18-card-3-background"}
            text1={"액션 아이템"}
            text2={
              "개선을 위한 액션 아이템을<br />원클릭으로 생성하고,<br />관리하고, 회고해 보세요."
            }
            textColor1={"text-section-18-card-3-text-1"}
            textColor2={"text-section-18-card-3-text-2"}
            imgContent={
              <img
                data-component="landing-image"
                src="https://static.flex.team/v2/landing/home/one-on-one/img-one-on-one-3.png"
                srcSet="https://static.flex.team/v2/landing/home/one-on-one/img-one-on-one-3.png 1x, https://static.flex.team/v2/landing/home/one-on-one/img-one-on-one-3@2x.png 2x, https://static.flex.team/v2/landing/home/one-on-one/img-one-on-one-3@3x.png 3x"
                data-card="home-card"
                alt="액션 아이템"
              />
            }
            height={400}
            extraSvgContent={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                className="flex-shrink-0"
              >
                <path
                  fill="#83A1C5"
                  d="M9 1a8 8 0 0 0-3.955 14.956C5.015 15.64 5 15.322 5 15 5 9.477 9.477 5 15 5c.322 0 .641.015.956.045A7.997 7.997 0 0 0 9 1Z"
                ></path>
                <path
                  fill="#83A1C5"
                  d="M15 7a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm3.686 5.364a.9.9 0 0 1 0 1.272l-4.05 4.05a.9.9 0 0 1-1.272 0l-1.8-1.8a.9.9 0 1 1 1.272-1.272L14 15.777l3.414-3.413a.9.9 0 0 1 1.272 0Z"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            }
          />
        </>
      );
  }
  return <></>;
}
