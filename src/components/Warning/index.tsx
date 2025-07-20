import Image from "next/image";
import WarningIcon from "../../assets/warning.svg";

type WarningProps = {
  text: string;
};

export const Warning = ({ text }: WarningProps) => {
  return (
    <div className="bg-yellow-200 border-1 border-yellow-500 flex gap-1 p-3 rounded-md text-[0.9rem] w-full">
      <div className="flex items-center gap-1">
        <Image src={WarningIcon} alt="Aviso" width={15} />
        <div className="font-[700]">Atenção:</div>
      </div>
      <div>{text}</div>
    </div>
  );
};
