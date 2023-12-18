import MethodList from "@/components/methodList/page";

import { BreakpointChecker } from "@/utils/breakpointChecker.jsx";
import Timer from "@/../public/timer.png";
import Image from "next/image";
import Link from "next/link";
const EXPRESS_COFFEE_OPTIONS = [
  { id: 1, displayName: "Temporizer", img: Timer, helperText: "Dosis timer" },
];

const Home = () => {
  return (
    <div className="justify-center flex flex-col  max-w-screen p-2 ">
      <BreakpointChecker />


      <MethodList />

      <div>
        <div className="flex flex-col pl-8">
          <h3>Express Coffee</h3>
          <h4 className="text-xs">Upgrade your coffee with this tools</h4>
        </div>

        <div>
          {EXPRESS_COFFEE_OPTIONS.map((opt) => (
            <div
              key={opt.id}
              className="flex flex-col w-fit items-center p-10 cursor-pointer"
            >
              <Link href='/drip'>
                <Image src={opt.img} alt={opt.displayName} width={120} />
                <span className="text-xs text-center pt-2">
                  {opt.helperText}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
