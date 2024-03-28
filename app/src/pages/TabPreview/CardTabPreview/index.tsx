import { ReactNode } from "react";

interface ICardTabPreview {
  title: string;
  children: ReactNode;
}

export const CardTabPreview = ({ title, children }: ICardTabPreview) => {
  return (
    <div className="rounded-lg w-full p-5 gap-5 shadow-md border flex flex-col h-full text-left">
      <p className="text-sm font-semibold text-left">{title}</p>
      <div className="space-y-3 text-sm">{children}</div>
    </div>
  );
};
