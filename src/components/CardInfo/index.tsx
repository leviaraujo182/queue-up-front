import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type CardInfoProps = {
  title: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
};

export const CardInfo = ({ title, content, icon }: CardInfoProps) => {
  return (
    <Card className="min-w-[200px] min-h-[160px] w-full">
      <CardHeader>
        <CardTitle className="text-[1.3rem] font-[500] flex items-center justify-between w-full">
          {title} {icon && icon}
        </CardTitle>
      </CardHeader>
      <CardContent>{content && content}</CardContent>
    </Card>
  );
};
