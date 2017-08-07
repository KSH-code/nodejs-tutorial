/**
 * @author [KSH-Code]
 * @email [tjdgnsnqn133@gmail.com]
 * @create date 2017-08-07 01:45:14
 * @modify date 2017-08-07 01:45:14
 * @desc [mysql crud]
*/
const mysql = require('mysql')
const bodyparser=require('body-parser')

var con=mysql.createConnection({
    user:'root',
    password:'',
    database:'ksh'
})

con.query('insert into `tb` values(?,?,?)',['A1',453453,13],e=>{if(e)console.log(e)})//C
con.query('select * from `tb`',(e,rs)=>{
    if(e)console.log(e) 
    else console.log(rs)})//R
con.query('update `tb` set sales = ? where sales > 0',[1],e=>{if(e)console.log(e)})//U
con.query('delete from `tb` where sales<= 0',e=>{if(e)console.log(e)})//D