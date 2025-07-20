import { ClipLoader } from "../ClipLoader";
import { Button } from "../ui/button";

type GradientButtonProps = {
  label: string;
  onClick?: () => void;
  isLoading?: boolean;
};

export const GradientButton = ({
  label,
  onClick,
  isLoading,
}: GradientButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className="w-full p-6 bg-gradient-to-r from-blue-800 to-purple-600 cursor-pointer font-[600]"
    >
      {isLoading ? <ClipLoader /> : label}
    </Button>
  );
};
