import { useSearchParams } from "next/navigation";
import React from "react";
type SelectorProps = {
  onSelectionChange: (value: string) => void;
};



const Selector = ({ onSelectionChange }: SelectorProps) => {


  const searchParams = useSearchParams();

  return searchParams.get("card_index") ? 
  (
    <div className=" w-full mx-auto flex justify-between ">
      <label className="block text-xs text-nowrap md:text-sm font-medium text-custom-blue2 mb-2 w-1/2">
        Recipient Type:
      </label>
      <select
        id="dropdown"
        className="block ml-5 md:ml-0 w-2/3 px-4 py-2  text-xs text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        onChange={(e) => onSelectionChange(e.target.value)}
      >
        <option value="1" selected>
          Internal Recipient
        </option>
        <option value="2">External Recipient</option>
      </select>
    </div>
  ) : (
    <div className="h-3"></div>
  );
};

export default Selector;
