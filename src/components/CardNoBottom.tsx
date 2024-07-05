import { IInformations } from "./CardContainer";

export function CardNoBottom(props: IInformations) {
  return (
    <div
      className={`flex flex-col flex-nowrap justify-between items-start h-400px flex-0-0-400px overflow-hidden pt-30px px-5 gap-30px ${props.backgroundColor} rounded-20px`}
    >
      <div className="flex flex-col flex-nowrap justify-between items-stretch gap-10">
        <span className={`font-bold ${props.textColor1} text-xl`}>
          <span className={`${props.textColor2}`}>{props.text1}</span>
          <br />
          <span dangerouslySetInnerHTML={{ __html: props.text2 }} />
        </span>
      </div>
      <div
        className="flex w-full justify-center"
        dangerouslySetInnerHTML={{ __html: props.imgContent }}
      />
    </div>
  );
}
