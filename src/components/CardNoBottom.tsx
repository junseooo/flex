import { IInformations } from "./CardContainer";
import { TextBox } from "./TextBox";

export function CardNoBottom(props: IInformations) {
  const heightStyle = props.height
    ? { height: `${props.height}px` }
    : { height: "400px" };

  return (
    <div
      className={`flex flex-col flex-nowrap justify-between items-start overflow-hidden pt-30px px-5 gap-30px ${props.backgroundColor} rounded-20px`}
      style={{ ...heightStyle }}
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
