import { Button } from "../ui/button";
import { FaRegUser } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { PiTimerBold } from "react-icons/pi";

export const ClientQueueItem = () => {
  return (
    <div className="w-full flex p-5 border items-center justify-between rounded-md cursor-pointer">
      <div className=" rounded-md flex items-center gap-5">
        <div className="w-[35px] h-[35px] bg-gray-400 text-white items-center justify-center flex rounded-full">
          1
        </div>
        <div>
          <div className="font-bold flex items-center gap-1">
            <FaRegUser size={15} />
            João Silva
          </div>
          <div className="flex gap-2">
            <div className="flex items-center gap-1 text-[0.8rem]">
              <BsTelephone size={15} />
              (88) 98109-2424
            </div>
            <div className="text-[0.8rem] flex items-center gap-1">
              <PiTimerBold size={15} />
              Entrada: 14:40
            </div>
          </div>
        </div>
      </div>
      <Button variant={"destructive"}>Remover</Button>
    </div>
  );
};
