import { call_api_Connected_banks } from "../(call_api_function_connected_banks)/route";
import { call_bank_transfers_all } from "../call_bank_transfers_all/route";
import { call_dwolla_id_for_frontEnd } from "../call_dwolla_id_for_frontEnd/route";
import { call_find_balance_acc_id_with_customer_id } from "../call_find_balance_acc_id_with_customer_id/route";
import { call_find_customer_id_with_funding_src_id } from "../call_find_customer_id_with_funding_src_id/route";
import { call_find_customer_with_customer_id } from "../call_find_customer_with_customer_id/route";
import { format_date } from "../format_date_function/route";
  
const call_bank_transfers_proper_all= async()=>{
      const data = await call_bank_transfers_all();
      const transactions= data.res;
      const unique_five=[] as any;
      const unique_five_source=[] as any;
      const unique_five_destination=[] as any;
      const money= [] as any;
      const status= [] as any;
      const time= [] as any;
      const pid= [] as any;
  

                  for(let i=0;i<transactions.length;i++){
     
        if(("funded-transfer" in transactions[i]._links) || ("funding-transfer" in transactions[i]._links) ){
          if(!(("source-funding-source" in transactions[i]._links) && ("destination-funding-source" in transactions[i]._links)))
            i++
        }
        
        if(unique_five_destination.length==15){
            break ;
        }
        let source:any;
        if (transactions[i]._links.source["resource-type"] === "customer") {
          const customerId = transactions[i]._links.source.href.slice(-36);
          source=  {"type":"cid","id":customerId,"name":""}
        } else if (transactions[i]._links.source["resource-type"] === "funding-source") {
          const fundingId = transactions[i]._links.source.href.slice(-36);
          source= {"type":"fid","id":fundingId,"name":""}
          
        } else if (transactions[i]._links.source["resource-type"] === "account") {
            source= {"type":"main_account","id":"","name":""};
        }
        
        
        
        let destination;
        if (transactions[i]._links.destination["resource-type"] === "customer") {
            const customerId = transactions[i]._links.destination.href.slice(-36);
            destination= {"type":"cid","id":customerId,"name":""};
        } else if (transactions[i]._links.destination["resource-type"] === "funding-source") {
            const fundingId = transactions[i]._links.destination.href.slice(-36);
          destination= {"type":"fid","id":fundingId,"name":""};
          
        } else if (transactions[i]._links.destination["resource-type"] === "account") {
          destination= {"type":"main_account","id":"","name":""};
        }
        if("funding-transfer" in transactions[i]._links || ("funded-transfer" in transactions[i]._links) ){
            
            
          const fundingId = transactions[i]._links["source-funding-source"].href.slice(-36);
          source= {"type":"fid","id":fundingId,"name":""}
          const fundingId_ = transactions[i]._links["destination-funding-source"].href.slice(-36);
          destination= {"type":"fid","id":fundingId_,"name":""}
          
        }
        
        
        
        
       
          
          unique_five.push(`${source?.id+"<-->"+destination?.id}`)
        unique_five_source.push(source)
        unique_five_destination.push(destination )
        money.push(transactions[i].amount.value)
        status.push(transactions[i].status)
        pid.push(transactions[i].id)
        time.push(format_date(transactions[i].created))
    
}


        const dest_names = await Promise.all(
                        unique_five_destination.map(async (x: any) => {
                          if (x.type === "cid") {
                            return await call_find_customer_with_customer_id(x.id);
                          } else if (x.type === "fid") {
                            const cid = await call_find_customer_id_with_funding_src_id(x.id);
                            return await call_find_customer_with_customer_id(cid);
                          }
                        })
                      );
                  
                      


                      const source_names = await Promise.all(
                        unique_five_source.map(async (x: any) => {
                          if (x.type === "cid") {
                            return await call_find_customer_with_customer_id(x.id);
                          } else if (x.type === "fid") {
                            const cid = await call_find_customer_id_with_funding_src_id(x.id);
                            return await call_find_customer_with_customer_id(cid);
                          }
                          else{
                            return "Card"
                          }
                        })
                        
                      );
                  
                   


        


         const dest_fids = await Promise.all(
                        unique_five_destination.map(async (x: any) => {
                          if (x.type === "cid") {
                            return await call_find_balance_acc_id_with_customer_id(x.id);
                          } else if (x.type === "fid") {
                            return x.id;
                          }
                        }))





          const source_fids = await Promise.all(
                          unique_five_source.map(async (x: any) => {
                            if (x.type === "cid") {
                              return await call_find_balance_acc_id_with_customer_id(x.id);
                            } else if (x.type === "fid") {
                            return x.id;
                          }
                        })
                      )
            
            const final_information= {"sender":source_names as string [],"receiver":dest_names as string [],"source_fid":source_fids as string [],"dest_fid":dest_fids as string [],"status":status as string [],"amounts":money as number[],"time":time as string[],"pid":pid as string[]}
                     
                      return final_information;
        }

export default call_bank_transfers_proper_all;