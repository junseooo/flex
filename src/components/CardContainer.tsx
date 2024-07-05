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
}

export function CardContainer({ section }: CardContainerProps) {
  // const informations: IInformations = {
  //   backgroundColor: "",
  //   text1: "",
  //   text2: "",
  //   textColor1: "",
  //   textColor2: "",
  //   imgContent: "",
  // };
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
            textColor1={"text-section-6-1-card-text"}
            textColor2={"text-section-6-2-card-text"}
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
            textColor1={"text-section-6-3-card-text"}
            textColor2={"text-section-6-4-card-text"}
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
      break;
    // case 9:
    //   informations.backgroundColor = "bg-section-9-1-background";
    //   informations.text1 = "유연근무제를 고민하나요?";
    //   informations.text2 =
    //     "일하는 방식의 급격한 변화.<br />유연근무제를 국내 법과<br />회사 문화에 맞게 운영해보세요.";
    //   informations.textColor1 = "rgb(120, 162, 203)";
    //   informations.textColor2 = "rgb(56, 110, 165)";
    //   informations.imgContent = `<img data-component="landing-image" src="https://static.flex.team/v2/landing/home/time-tracking/img-tt-1.png" srcSet="https://static.flex.team/v2/landing/home/time-tracking/img-tt-1.png 1x, https://static.flex.team/v2/landing/home/time-tracking/img-tt-1@2x.png 2x, https://static.flex.team/v2/landing/home/time-tracking/img-tt-1@3x.png 3x" data-card="home-card" alt="유연근무제를 고민 중"></img>`;
    //   break;
    default:
      return <div></div>;
  }
  return <></>;
}
