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
  imgContent: string;
  text3?: string;
  text4?: string;
  text5?: string;
  text6?: string;
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
            imgContent={`<img
                    data-component="landing-image"
                    src="https://static.flex.team/v2/landing/home/corehr/img-core-1.png"
                    srcSet="https://static.flex.team/v2/landing/home/corehr/img-core-1.png 1x, https://static.flex.team/v2/landing/home/corehr/img-core-1@2x.png 2x, https://static.flex.team/v2/landing/home/corehr/img-core-1@3x.png 3x"
                    data-card="home-card"
                    alt="Core hr flex"
                  />`}
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
            imgContent={`<img
                width="200px"
                style={{ alignSelf: 'center' }}
                data-component="landing-image"
                src="https://static.flex.team/v2/landing/home/corehr/img-core-2.png"
                srcSet="https://static.flex.team/v2/landing/home/corehr/img-core-2.png 1x, https://static.flex.team/v2/landing/home/corehr/img-core-2@2x.png 2x, https://static.flex.team/v2/landing/home/corehr/img-core-2@3x.png 3x"
                data-card="home-card"
                alt="All in one hr"
              />`}
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
          imgContent={`<img
                           data-component="landing-image"
                           src="https://static.flex.team/v2/landing/home/insight/img-insight.png"
                           srcSet="https://static.flex.team/v2/landing/home/insight/img-insight.png 1x, https://static.flex.team/v2/landing/home/insight/img-insight@2x.png 2x, https://static.flex.team/v2/landing/home/insight/img-insight@3x.png 3x"
                           data-card="home-card"
                           alt="인사이트"
                         />`}
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
            imgContent={`<img data-component="landing-image" src="https://static.flex.team/v2/landing/home/time-tracking/img-tt-1.png" srcSet="https://static.flex.team/v2/landing/home/time-tracking/img-tt-1.png 1x, https://static.flex.team/v2/landing/home/time-tracking/img-tt-1@2x.png 2x, https://static.flex.team/v2/landing/home/time-tracking/img-tt-1@3x.png 3x" data-card="home-card" alt="유연근무제를 고민 중" />`}
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
            imgContent={`<img data-component="landing-image" src="https://static.flex.team/v2/landing/home/time-tracking/img-tt-2.png" srcSet="https://static.flex.team/v2/landing/home/time-tracking/img-tt-2.png 1x, https://static.flex.team/v2/landing/home/time-tracking/img-tt-2@2x.png 2x, https://static.flex.team/v2/landing/home/time-tracking/img-tt-2@3x.png 3x" data-card="home-card" alt="다양한 근무 유형" />`}
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
            imgContent={`<img data-component="landing-image" src="https://static.flex.team/v2/landing/home/time-tracking/img-tt-3.png" srcSet="https://static.flex.team/v2/landing/home/time-tracking/img-tt-3.png 1x, https://static.flex.team/v2/landing/home/time-tracking/img-tt-3@2x.png 2x, https://static.flex.team/v2/landing/home/time-tracking/img-tt-3@3x.png 3x" data-card="home-card" alt="근로기준법 설정" />`}
          />
          <div style={{ height: "20px" }} />
          <CardNoBottom
            backgroundColor={"bg-section-9-card-4-background"}
            text1={"번아웃을 방지하는 근태관리"}
            text2={"구성원의 업무 강도를 파악해<br />번아웃 위험을 예방하세요."}
            textColor1={"text-section-9-card-4-text-1"}
            textColor2={"section-9-card-4-text-2-gradient"}
            imgContent={`<img class="max-w-200px" data-component="landing-image" src="https://static.flex.team/v2/landing/home/time-tracking/img-tt-4.png" srcSet="https://static.flex.team/v2/landing/home/time-tracking/img-tt-4.png 1x, https://static.flex.team/v2/landing/home/time-tracking/img-tt-4@2x.png 2x, https://static.flex.team/v2/landing/home/time-tracking/img-tt-4@3x.png 3x" data-card="home-card" alt="번아웃 방지" />`}
          />
        </div>
      );
    default:
      return <div></div>;
  }
  return <></>;
}
