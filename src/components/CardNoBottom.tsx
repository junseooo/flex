import { IInformations } from "./CardContainer";
import { TextBox } from "./TextBox";

export function CardNoBottom(props: IInformations) {
  return (
    <div
      className={`flex flex-col flex-nowrap justify-between items-start h-${props.height}px overflow-hidden pt-30px px-5 gap-30px ${props.backgroundColor} rounded-20px`}
      style={{ height: `${props.height}px` }}
    >
      <div className="flex flex-col flex-nowrap justify-between items-stretch gap-10">
        <TextBox
          textColor1={props.textColor1}
          textColor2={props.textColor2}
          text1={props.text1}
          text2={props.text2}
        />
      </div>
      <div
        className="flex w-full justify-center"
        dangerouslySetInnerHTML={{ __html: props.imgContent }}
      />
    </div>
  );
}
