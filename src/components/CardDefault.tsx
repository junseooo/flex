import { IInformations } from "./CardContainer";
import { TextBox } from "./TextBox";

export function CardDefault(props: IInformations) {
  return (
    <div
      className={`flex flex-col flex-nowrap justify-between items-start px-5 py-30px gap-34px w-full ${props.backgroundColor} rounded-20px overflow-hidden`}
    >
      <div className="flex flex-col flex-nowrap justify-between items-stretch gap-10">
        <TextBox
          textColor1={props.textColor1}
          textColor2={props.textColor2}
          text1={props.text1}
          text2={props.text2}
        />
      </div>
      <div dangerouslySetInnerHTML={{ __html: props.imgContent }} />
    </div>
  );
}
