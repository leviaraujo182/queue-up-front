type StatusBadgeProps = {
  status?: "active" | "inactive";
};

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  return (
    <div
      className={`p-1 pl-4 pr-4 rounded-lg font-[600] text-[0.8rem] text-white ${
        status === "active" ? "bg-green-600" : "bg-red-600"
      }`}
    >
      {status === "active" ? "Ativo" : "Inativo"}
    </div>
  );
};
