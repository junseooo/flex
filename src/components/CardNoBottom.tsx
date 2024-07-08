import { IInformations } from "./CardContainer";
import { TextBox } from "./TextBox";

export function CardNoBottom(props: IInformations) {
  return (
    <div
      className={`flex flex-col flex-nowrap justify-between items-start h-400px flex-0-0-400px overflow-hidden pt-30px px-5 gap-30px ${props.backgroundColor} rounded-20px`}
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
