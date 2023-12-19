"use client";

import { useState } from "react";
import Button from "../common/Button/page";
import MethodItem from "./methodItem";

import { METHOD_LIST } from "../../mocked/methods.js";

const MethodList = () => {
  const [list, setList] = useState(METHOD_LIST);

  let neMethodSelected = {
    id: 9,
    name: "Turkish",
    img: "/turkish.png",
  };

  const handleClick = () => {
    if (list.some((e) => e.id === neMethodSelected.id)) {
      throw Error("This Method exists");
    }
    setList([...list, neMethodSelected]);

    console.log(list, "list updated");
  };

  const props = {
    onClick: handleClick,
  };

  return (
    <div className="mt-4">
      <div className="flex ml-6">
        <div className="">
          <h2>Metodos de preparacion</h2>
          <span>Seleccione uno para comenzar</span>
        </div>
        <Button displayText="Agregar +" props={props} />
      </div>

      <div className="p-6">
        <div className=" rounded mt-6 p-14 bg-custom-orange-light grid lg:grid-cols-4 xl:grid-cols-5  grid-cols-2 sm:grid-cols-3 gap-8  place-items-center w-full max-w-screen">
          {list.map((m) => (
            <MethodItem key={m.id} method={m} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MethodList;
