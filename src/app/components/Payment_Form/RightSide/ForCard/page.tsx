import { getSelectedCardInfo } from "@/app/(utils)/(call_api_function_selected_connected_card)/route";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
type StatusData = {
  status: string;
  stts_color: string;
};

type PropsType = {
  status_data: StatusData;
};
const  ForCard:React.FC<PropsType>= ({status_data})=> {
  const [card_details, set_card_details] = useState({
    last4: "Processing...",
    type: "Processing...",
    fingerprint: "Processing...",
    exp_month: "...",
    exp_year: "...",
  });
  const searchParams = useSearchParams();
  useEffect(() => {
    const callfun = async () => {
      const data = await getSelectedCardInfo(
        Number(searchParams.get("card_index"))
      );
      console.log(data);
      set_card_details(data);

      console.log(card_details);
    };
    callfun();
  }, []);
  return (
    <div className="h-full w-9/12 text-custom-blue3">
      <div className="h-2/12 w-full flex flex-col-reverse  ">
        <div className="flex">
          <h1 className="text-xs md:text-xl font-bold text-custom-blue2 text-nowrap">
            Card Details{" "}
          </h1>
          <h1 className="text-xs md:text-xl font-bold text-gray-500 ml-2">
            {" "}
            (Sender){" "}
          </h1>
        </div>
      </div>
      <div className="h-9/12 w-full ">
        <div className="h-3/12 w-full flex flex-col-reverse">
          <div className="h-1/2 w-full flex items-center border-b-2 border-b-custom-grey3 ">
            <h1 className="text-xs md:text-lg text-custom-blue2">
              {card_details.type.toUpperCase()}
            </h1>
          </div>
          <div className="h-1/2 w-full flex flex-col-reverse">
            <h1 className="text-xs md:text-sm text-gray-500">Card Type</h1>
          </div>
        </div>
        <div className="h-3/12 w-full flex flex-col-reverse">
          <div className="h-1/2 w-full flex  border-b-2 border-b-custom-grey3  ">
            <div className="h-full w-11/12 flex items-center ">{`************${card_details.last4}`}</div>
            <div className="h-full w-1/12 "></div>
          </div>
          <div className="h-1/2 w-full flex flex-col-reverse">
            <h1 className="text-xs md:text-sm text-gray-500">Card Number</h1>
          </div>
        </div>
        <div className="h-3/12 w-full flex  mt-2 ">
          <div className="h-9/12 w-2/3  text-xs md:text-base">
            <div className="h-1/5 w-full">Expire Date</div>
            <div className="h-4/5 w-full flex items-center  text-xl">
              <div className="w-4/12 h-full border-b-2 border-b-custom-grey3 ">
                <div className="w-11/12  h-full   flex flex-col-reverse ">
                  <div className="flex items-center justify-center">
                    <h1>{`${card_details.exp_month}`}</h1>
                    <MdKeyboardArrowDown className="ml-1" />
                  </div>
                </div>
              </div>
              <div className="w-5/12 h-full  border-b-2 border-b-custom-grey3 ml-2 flex flex-col-reverse   ">
                <div className="flex items-center justify-center">
                  <h1>{`${card_details.exp_year}`}</h1>
                  <MdKeyboardArrowDown className="ml-1" />
                </div>
              </div>
            </div>
          </div>
          <div className="h-9/12 w-1/3 border-b-2 border-b-custom-grey3 ">
            <div className="h-1/5 w-full text-xs md:text-base">CVC/CVV</div>

            <div className="h-4/5 w-full flex items-center  text-xs md:text-base ">
              <div className="w-11/12  h-full  flex flex-col-reverse ">
                <h1>*** </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="h-2/12 w-full flex items-center justify-center text-xs md:text-base">
          <button
            type="submit"
            className="h-10/12 w-full rounded-l-full rounded-r-full cursor-pointer bg-custom-blue4 flex items-center justify-center"
            style={{backgroundColor:status_data.stts_color}}
          >
            <div>
              <h1 className="font-bold text-slate-200">{status_data.status}</h1>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
export default ForCard;