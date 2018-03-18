
var token="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRlN2VjZjNiNWY4ZTgyYTA4YjQxODhlYjM4NmYzYTkwNzdmOTFmN2JjZGNiMjUxMWY2ODU2ODI4ZjRlZDZjNzNiYjBlYjU3MmM0NTMyNDIyIn0.eyJhdWQiOiIxIiwianRpIjoiZGU3ZWNmM2I1ZjhlODJhMDhiNDE4OGViMzg2ZjNhOTA3N2Y5MWY3YmNkY2IyNTExZjY4NTY4MjhmNGVkNmM3M2JiMGViNTcyYzQ1MzI0MjIiLCJpYXQiOjE1MjEzMjk4OTYsIm5iZiI6MTUyMTMyOTg5NiwiZXhwIjoxNTUyODY1ODk2LCJzdWIiOiIxNjQ4Iiwic2NvcGVzIjpbInVzZS1zdW5hdCJdfQ.rHh3eV5nY7yMkm3MJEmBpe3FvQkSs8TT5bGBEn5X_Ywx2fmZNyQ0QPOK3CkgQ9TKP96MLx8MCrqkyYXnK3w-2bYzSGCXuRGM7sEPRVJlQD37ppNDq6I_JBDxoT4XEfj5NCX3vJU870fv9R7fqlvUJyWj0wXSn-tZQB3b9wQLKF3iMut49R_uGmLyw3GiGfqaHFFDgwLRmcA7kCLuSVNFQU3LAK7oZa6X4XeLnrEOYgg6sN3_hciYIKxSfVlYarMGjBUtqAK3Xf7jAhPpxuFCWVTT7wWtmehudCeWJ-2Z6JcXZZBoRRMpqEL2-sL8nX18TVnJAab4z95QjOyRpWMNhn3esu_4WkcDs75SJUlLgcfMY-0iXpMVmtzBLRO1jrP68-EKufbz4lWPH_UGB6Pw_MHv_h1DAVU8Riu-WrKlncRCUHfljj46BZyhJjI7XPe1swvjf46zHPzqx9lPlfc0Lp8n3jcDaBaMZL4nf2kxaxFqog7oz1f7uFcHaKwU0Vi93yxEd1GQRg0fwe-5dziYUc4CmZQoH2xOfN-eWNy9N7f8ZNQLI29sU60ZxNx0lQX7qvo8ry4IBRdWGvqhYAMiZR0jvq64tm-ZMg9Gckk2WMe_nsy44pC1f7Degmdkt1yvF6A4mysvL65g-FLW_WtS9cvYWNrcCcgZko_jI1HP9IQ";
var request=require("request")
class Sunat {

static consulta(s,callbackx){

	var self=this;
request({
    url:"https://tecactus.com/api/sunat/query/ruc",
    method:"POST",
    auth: {
        'bearer': token
      },
    json:{
        "ruc":s,
          "dni":"73456123"
    }
},function(err,res,data){
	if(!err){
 callbackx(data);
	}
   

})
}

}

module.exports=Sunat;