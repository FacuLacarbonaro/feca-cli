import Image from "next/image";

interface Props {
  method: {
    id: number;
    name: string;
    img: string;
  };
}

const MethodItem = ({ method }: Props) => {
  return (
    <div className="flex flex-col w-fit justify-center cursor-pointer ">
      <Image src={method.img} alt={method.name} width={120} height={120} />

      <span className="font-semibold mt-4 text-center">{method.name}</span>
    </div>
  );
};

export default MethodItem;
