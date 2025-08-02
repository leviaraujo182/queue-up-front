import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ClipLoader } from "../ClipLoader";

type CardInfoProps = {
  title: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
  isLoading?: boolean;
};

export const CardInfo = ({
  title,
  content,
  icon,
  isLoading = false,
}: CardInfoProps) => {
  return (
    <Card className="min-w-[200px] min-h-[160px] w-full">
      <CardHeader>
        <CardTitle className="text-[1.3rem] font-[500] flex items-center justify-between w-full">
          {title} {icon && icon}
        </CardTitle>
      </CardHeader>
      {isLoading && (
        <CardContent>
          <ClipLoader color="purple" size={10} />
        </CardContent>
      )}
      {!isLoading && <CardContent>{content && content}</CardContent>}
    </Card>
  );
};
