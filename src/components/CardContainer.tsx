interface CardContainerProps {
  section: number;
}

interface IInformations {
  backgroundColor: string;
  text1: string;
  text2: string;
  textColor1: string;
  textColor2: string;
  imgContent: string;
}

export function CardContainer({ section }: CardContainerProps) {
  const informations: IInformations = {
    backgroundColor: "",
    text1: "",
    text2: "",
    textColor1: "",
    textColor2: "",
    imgContent: "",
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
      break;
    case 7:
      break;
    case 8:
      break;
    case 9:
      informations.backgroundColor = "bg-section-9-1-background";
      informations.text1 = "유연근무제를 고민하나요?";
      informations.text2 =
        "일하는 방식의 급격한 변화.<br />유연근무제를 국내 법과<br />회사 문화에 맞게 운영해보세요.";
      informations.textColor1 = "rgb(120, 162, 203)";
      informations.textColor2 = "rgb(56, 110, 165)";
      informations.imgContent = `<img data-component="landing-image" src="https://static.flex.team/v2/landing/home/time-tracking/img-tt-1.png" srcSet="https://static.flex.team/v2/landing/home/time-tracking/img-tt-1.png 1x, https://static.flex.team/v2/landing/home/time-tracking/img-tt-1@2x.png 2x, https://static.flex.team/v2/landing/home/time-tracking/img-tt-1@3x.png 3x" data-card="home-card" alt="유연근무제를 고민 중"></img>`;
      break;
    default:
      return <div></div>;
  }

  return (
    <div
      className={`flex flex-col flex-nowrap justify-between items-start px-5 py-30px gap-34px w-full ${informations.backgroundColor} rounded-20px overflow-hidden`}
    >
      <div className="flex flex-col flex-nowrap justify-between items-stretch gap-10">
        <span className="font-bold text-section-8-card-text-1 text-xl">
          <span className="text-section-8-card-text-2">
            {informations.text1}
          </span>
          <br />
          <span dangerouslySetInnerHTML={{ __html: informations.text2 }} />
        </span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: informations.imgContent }} />
    </div>
  );
}
