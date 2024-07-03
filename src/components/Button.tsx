export default function Button({
  text,
  backgroundColor,
  textColor,
}: {
  text: string;
  backgroundColor: string;
  textColor: string;
}) {
  return (
    <a
      href="/"
      type="button"
      className={`flex justify-center items-center shadow-custom-shadow w-200px min-w-220px h-14 rounded-48px ${backgroundColor} pl-18 pr-18 text-base font-bold ${textColor}`}
    >
      {text}
    </a>
  );
}
