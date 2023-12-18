'use client'

import Button from "@/components/common/Button/page";
import Image from "next/image";

import Scale from "@/../public/scale.png";
import RightArrow from "@/../public/right-arrow.png";

const CELLS = [
  {
    id: 1,
    displayName: "Coffee",
    value: "",
  },
  {
    id: 2,
    displayName: "Yield",
    value: "",
  },
  {
    id: 3,
    displayName: "Amoladora",
    value: "",
  },
  {
    id: 4,
    displayName: "Pre-infusion",
    value: "",
  },
  {
    id: 5,
    displayName: "Time",
    value: "",
  },
  {
    id: 6,
    displayName: "Shots",
    value: "",
  },
];

const Drip = () => {
  const setStartingDose = () => {
    console.log("set starting dose");
  };

  return (
    <div className="w-full p-14 pt-8">
      <div className="grid grid-cols-3 gap-3 p-10 bg-slate-600  ">
        <div className="col-span-3 flex items-center relative ">
          <Image src={Scale} alt="scale" width={35} />
          <p className="text-sm pl-2">Touch to set starting dose </p>

          <Image
            src={RightArrow}
            alt="scale"
            width={20}
            className="absolute left-full cursor-pointer"
            onClick={setStartingDose}
          />
        </div>

        {CELLS.map((cell) => (
          <div key={cell.id} className="flex flex-col align-center">
            <span>{cell.displayName}</span>
            <span>{cell.value || "-"}</span>
          </div>
        ))}
      </div>

      <div className="p-4">
        <h2 className="pt-2 pb-4">Saca el Maximo partido a tu cafe</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga eos
          dignissimos distinctio sint, beatae debitis tenetur cumque dolores,
          quos consequatur inventore aperiam sequi iure laudantium possimus, ea
          minima hic. Excepturi.
        </p>
      </div>
      <div className="flex justify-center w-full pt-6">
        <Button displayText="Start temporizer" />
      </div>
    </div>
  );
};

export default Drip;
