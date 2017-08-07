/**
 * @author [KSH-Code]
 * @email [tjdgnsnqn133@gmail.com]
 * @create date 2017-08-07 01:10:58
 * @modify date 2017-08-07 01:10:58
 * @desc [mysql]
*/
var mysql=require('mysql')
var client = mysql.createConnection({
    user:'root',
    password:''
})
client.query('use ksh')
client.query('select * from tb',((e,rs,f)=>{
    if(e)
        console.log(e)
    else{
        console.log(rs)
    }
}))