"use client";
import type { Metadata } from "next";
import "../../styles/globals.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || ""
);

// export const metadata: Metadata = {
//   title: "Banking Wallet Web",
// };

export default function layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="relative">
          <Elements stripe={stripePromise}>{children}</Elements>
        </div>
      </body>
    </html>
  );
}
