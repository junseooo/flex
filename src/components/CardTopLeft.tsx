import { IInformations } from "./CardContainer";
import { TextBox } from "./TextBox";

export function CardTopLeft(props: IInformations) {
  return (
    <div
      className={`flex flex-col flex-nowrap justify-between items-start pt-30px pl-5 gap-34px w-full ${props.backgroundColor} rounded-20px overflow-hidden`}
    >
      <div className="flex flex-col flex-nowrap justify-between items-stretch gap-10">
        <TextBox
          textColor1={props.textColor1}
          textColor2={props.textColor2}
          text1={props.text1}
          text2={props.text2}
        />
        {props.text3 ? (
          <TextBox
            textColor1={props.textColor1}
            textColor2={props.textColor2}
            text1={props.text3!}
            text2={props.text4!}
          />
        ) : null}
        {props.text5 ? (
          <TextBox
            textColor1={props.textColor1}
            textColor2={props.textColor2}
            text1={props.text5!}
            text2={props.text6!}
          />
        ) : null}
      </div>
      <div dangerouslySetInnerHTML={{ __html: props.imgContent }} />
    </div>
  );
}
