import { DateTime } from "luxon";

export const separating_weekly_monthly_daily_payment=(stripe_data:Array<any>)=>{
    
    const now = DateTime.now();
    var days=[] as any;
    days.push(now.toSeconds());
    var months=[] as any;
    months.push(now.toSeconds());
    var weeks=[] as any;
    weeks.push(now.toSeconds());
    for(var i=0;i<365;i++){
      days.push(now.minus({ days: i }).startOf("day").toSeconds())
      months.push(now.minus({ months: i }).startOf("month").toSeconds())
      weeks.push(now.minus({ weeks: i }).startOf("week").toSeconds())
    }
    var final_perMonth_data=[] as any
          var final_perWeek_data=[] as any
          var final_perDay_data=[] as any
          var sum=0
          var name;
          for(var j=0;j<365;j++){
              
                    
                var perDay_data= stripe_data.filter((x)=>{
                  var created = typeof(x.created)=="number"?x.created: DateTime.fromISO(x.created).toSeconds()
                  return ((created>=days[j+1]  && created<days[j]))})

                var perWeek_data= stripe_data.filter((x)=>{
                  var created = typeof(x.created)=="number"?x.created: DateTime.fromISO(x.created).toSeconds()
                  return ((created>=weeks[j+1]  && created<weeks[j]))})

                var perMonth_data= stripe_data.filter((x)=>{
                  var created = typeof(x.created)=="number"?x.created: DateTime.fromISO(x.created).toSeconds()
                  return ((created>=months[j+1]  && created<months[j]))})

                sum=0;
                perDay_data.forEach((x)=>{
                  sum=  typeof(x.created)=="number"?(sum+x.amount):(sum+ Number(x.amount.value))
                  
                })
                name= new Date(now.minus({ days: j }).startOf("day").toSeconds()*1000).toLocaleDateString('en-US', { weekday: 'long' })
                final_perDay_data.push({name,sum})

                sum=0;
                perMonth_data.forEach((x)=>{
                  sum=  typeof(x.created)=="number"?(sum+x.amount):(sum+ Number(x.amount.value))
                })
                name= new Date(now.minus({ months: j }).startOf("month").toSeconds()*1000).toLocaleDateString('en-US', { month: 'long' })
                final_perMonth_data.push({name,sum})

                sum=0;
                perWeek_data.forEach((x)=>{
                  sum=  typeof(x.created)=="number"?(sum+x.amount):(sum+ Number(x.amount.value))
                })
                final_perWeek_data.push({j,sum})
                

          
            
            }
            return {"daily":final_perDay_data,"weekly":final_perWeek_data,"monthly":final_perMonth_data}
}