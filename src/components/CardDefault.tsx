import { IInformations } from "./CardContainer";
import { TextBox } from "./TextBox";

export function CardDefault(props: IInformations) {
  const paddingStyle = props.pb
    ? { paddingBottom: `${props.pb}px`, paddingTop: "30px" }
    : { paddingTop: "30px", paddingBottom: "30px" };
  const heightStyle = props.height
    ? { height: `${props.height}px` }
    : { height: "400px" };

  return (
    <div
      className={`flex flex-col flex-nowrap justify-between items-start px-5 gap-34px w-full ${props.backgroundColor} rounded-20px overflow-hidden`}
      style={{ ...paddingStyle, ...heightStyle }}
    >
      <div className="flex flex-col flex-nowrap justify-between items-stretch gap-10">
        <TextBox
          textColor1={props.textColor1}
          textColor2={props.textColor2}
          text1={props.text1}
          text2={props.text2}
        />
      </div>
      {props.imgContent}
    </div>
  );
}
