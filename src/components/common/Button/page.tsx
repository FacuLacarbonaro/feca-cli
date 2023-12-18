"use client";

interface Props {
  displayText: string;
  props?: any;
}

const Button = ({ displayText, props }: Props) => {
  console.log(props, "props");

  return (
    <button
      className={`${props?.className} bg-slate-500 transition duration-150 ease-in-out  ml-5 text-orange-300 inline-block rounded-full bg-warning px-4 pb-1 pt-1.5 text-xs font-medium uppercase leading-normal `}
      {...props}
    >
      <span>{displayText}</span>
    </button>
  );
};

export default Button;
