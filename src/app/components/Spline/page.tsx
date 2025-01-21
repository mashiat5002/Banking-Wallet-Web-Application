

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the Spline component with no SSR
const Spline = dynamic(() => import('@splinetool/react-spline/next'), {
  ssr: false, // Disable SSR for this component
});

export default function Spline_bg() {
  return (
    <main className="h-full w-full">
   
      <Spline scene="https://prod.spline.design/1rqlqEdM-FyIEuI7/scene.splinecode" />
    </main>
  );
}
