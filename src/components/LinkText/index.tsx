type LinkTextProps = {
  label: string;
  onClick: () => void;
};

export const LinkText = ({ label, onClick }: LinkTextProps) => {
  return (
    <label
      onClick={onClick}
      className="font-[500] text-blue-700 cursor-pointer"
    >
      {label}
    </label>
  );
};
