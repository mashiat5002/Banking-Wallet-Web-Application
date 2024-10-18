import React from "react";

type NavlogoCard = {
  Logo: React.ElementType;
  Title: string;
  LS: string;
  FS: string;
  FST: string;
  LogoFill: string;
};
export const NavLogo: React.FC<NavlogoCard> = ({ Logo, Title, LS, FS ,FST, LogoFill}) => {
  return (
    <div className="h-full w-2/5  flex justify-center items-center ">
      <Logo style={{ fontSize: LS, fill: LogoFill }} />
      <h1
        className={`${FST} ${FS} flex justify-center items-center p-1.5 `}
      >
        {Title}
      </h1>
    </div>
  );
};
