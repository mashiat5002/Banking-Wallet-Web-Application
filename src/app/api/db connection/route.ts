
import mysql from 'mysql2/promise';
export const db = mysql.createPool({
  host: 'localhost', 
  user: 'root',

  database: 'banking_wallet'
});




