import parse from "html-react-parser";

export function TextBox(props: {
  textColor1: string;
  textColor2: string;
  text1: string;
  text2: string;
}) {
  return (
    <span className={`font-bold ${props.textColor1} text-xl`}>
      <span className={`${props.textColor2}`}>{parse(props.text1)}</span>
      <br />
      {parse(props.text2)}
    </span>
  );
}
