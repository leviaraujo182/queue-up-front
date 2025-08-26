import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { FaRegUser } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { PiTimerBold } from "react-icons/pi";
import { User } from "@/types/User";
import { QueueUser } from "@/types/QueueUser";
import { formatPhone } from "@/utils/formatPhone";
import { getHoursFromDate } from "@/utils/getHoursFromDate";
import { motion } from "framer-motion";

type ClientQueueItemProps = {
  queueUserData: QueueUser;
  onRemove: () => void;
  isCurrent?: boolean;
};

export const ClientQueueItem = (props: ClientQueueItemProps) => {
  const [fill, setFill] = useState(0);

  useEffect(() => {
    if (props.isCurrent) {
      setFill(0);
      const interval = setInterval(() => {
        setFill((prev) => (prev < 100 ? prev + 3 : 100));
      }, 10);
      return () => clearInterval(interval);
    } else {
      setFill(0);
    }
  }, [props.isCurrent]);

  return (
    <motion.div
      className="w-full flex p-5 border items-center justify-between rounded-md cursor-pointer"
      style={{
        background: props.isCurrent
          ? `linear-gradient(90deg, #2edd46d1 ${fill}%, #fff ${fill}%)`
          : "#fff",
        transition: "background 0.8s", // transição mais lenta
      }}
    >
      {/* ...restante do conteúdo... */}
      <div className="rounded-md flex items-center gap-5">
        <div className="w-[35px] h-[35px] bg-gray-400 text-white items-center justify-center flex rounded-full">
          {props.queueUserData.position}
        </div>
        <div>
          <div className="font-bold flex items-center gap-1">
            <FaRegUser size={15} />
            {props.queueUserData.user.firstName}
          </div>
          <div className="flex gap-2">
            <div className="flex items-center gap-1 text-[0.8rem]">
              <BsTelephone size={15} />
              {formatPhone(props.queueUserData.user.phone)}
            </div>
            <div className="text-[0.8rem] flex items-center gap-1">
              <PiTimerBold size={15} />
              Entrada: {getHoursFromDate(props.queueUserData.createdAt)}
            </div>
          </div>
        </div>
      </div>
      <Button variant={"destructive"} onClick={props.onRemove}>
        Remover
      </Button>
    </motion.div>
  );
};
