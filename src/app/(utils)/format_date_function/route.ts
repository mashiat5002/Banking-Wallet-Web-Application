

export  function format_date(timestamp:string) {
  
    const date = new Date(timestamp);
    
  
    const day = String(date.getDate()).padStart(2, '0'); // Ensures two digits
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed, so add 1
    const year = String(date.getFullYear()).slice(2); // Extracting last 2 digits of the year
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    const formattedDate = `${day}:${month}:${year}   ${hours}:${minutes}:${seconds}`;
    
    
    return formattedDate;
   
}
