


   
    

export  function toLocalDate(timestamp:any) {
   
    
    const date = new Date(timestamp * 1000); 

    
    const localDate = date.toLocaleString(); 
    return localDate
    
   
}

   

