import Image from "next/image";
import InfoBulb from "../../assets/info-bulb.svg";

type InfoProps = {
  text: string;
};

export const Info = ({ text }: InfoProps) => {
  return (
    <div className="bg-blue-100 border-1 border-blue-300 flex gap-1 p-3 rounded-md text-[0.9rem] w-full">
      <div className="flex items-center gap-1">
        <Image src={InfoBulb} alt="Aviso" width={15} />
        <div className="font-[700]">Dica:</div>
      </div>
      <div>{text}</div>
    </div>
  );
};
