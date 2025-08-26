import { ClipLoader } from "../ClipLoader";
import { Button } from "../ui/button";

type GradientButtonProps = {
  label: string;
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
};

export const GradientButton = ({
  label,
  onClick,
  isLoading,
  disabled,
}: GradientButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className="w-full p-6 bg-gradient-to-r from-blue-800 to-purple-600 cursor-pointer font-[600]"
      disabled={disabled}
    >
      {isLoading ? <ClipLoader /> : label}
    </Button>
  );
};
