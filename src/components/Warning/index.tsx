import Image from "next/image";
import WarningIcon from "../../assets/warning.svg";

type WarningProps = {
  text: string;
  type?: "error" | "info" | "success";
};

export const Warning = ({ text, type }: WarningProps) => {
  const getBackgroundColorByType = () => {
    switch (type) {
      case "error":
        return "bg-red-200 border-red-500";
      case "info":
        return "bg-blue-200 border-blue-500";
      case "success":
        return "bg-green-200 border-green-500";
      default:
        return "bg-yellow-200 border-yellow-500";
    }
  };

  return (
    <div
      className={`flex gap-1 p-3 rounded-md text-[0.9rem] w-full ${getBackgroundColorByType()}`}
    >
      <div className="flex items-center gap-1">
        <Image src={WarningIcon} alt="Aviso" width={15} />
        <div className="font-[700]">Atenção:</div>
      </div>
      <div>{text}</div>
    </div>
  );
};
