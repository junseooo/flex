import { IInformations } from "./CardContainer";

export function CardDefault(props: IInformations) {
  return (
    <div
      className={`flex flex-col flex-nowrap justify-between items-start px-5 py-30px gap-34px w-full ${props.backgroundColor} rounded-20px overflow-hidden`}
    >
      <div className="flex flex-col flex-nowrap justify-between items-stretch gap-10">
        <span className={`font-bold ${props.textColor1} text-xl`}>
          <span className={`${props.textColor2}`}>{props.text1}</span>
          <br />
          <span dangerouslySetInnerHTML={{ __html: props.text2 }} />
        </span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: props.imgContent }} />
    </div>
  );
}
