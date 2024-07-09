import { CardProps } from "../interfaces/CardProps";
import { TextBox } from "./TextBox";

export function CardBasis(props: CardProps) {
  const paddingStyle = {
    paddingTop: "30px",
    paddingRight: props.pr ? `${props.pr}px` : "20px",
    paddingBottom: props.pb ? `${props.pb}px` : "0px",
    paddingLeft: props.pl ? `${props.pl}px` : "20px",
  };
  const heightStyle = props.height
    ? {
        height: `${props.height}px`,
        flex: `1 1 ${props.height}px`,
      }
    : {};
  const gapStyle = {
    gap: props.gap ? `${props.gap}px` : "30px",
  };
  const widthStyle = { width: props.width ? "100%" : "" };

  return (
    <div
      className={`flex flex-col flex-nowrap justify-between items-start ${props.backgroundColor} rounded-20px overflow-hidden`}
      style={{ ...paddingStyle, ...heightStyle, ...gapStyle, ...widthStyle }}
    >
      {props.extraSvgContent!}
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
      {props.imgContent!}
    </div>
  );
}
