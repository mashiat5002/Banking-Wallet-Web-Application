import type { Metadata } from "next";
import "../../styles/globals.css";

export const metadata: Metadata = {
  title: "Banking Wallet Web",
};

export default function layout({children, modal}:{
  children:React.ReactNode;
  modal:React.ReactNode;
}) {
return (
  <html lang="en">
  
  <body >
  <div className="relative">
    {children}
    {/* { <div className="absolute top-0 left-0 ">{modal}</div>} */}
  </div>
  </body>
  </html>
)
}
