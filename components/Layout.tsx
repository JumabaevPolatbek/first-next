import React from "react";

type Props = {
  title?: string;
  children?: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-fuchsia-200 rounded">
      {children}
    </div>
  );
};
