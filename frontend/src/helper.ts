 import Cookies from 'js-cookie';
 
 export default function readDataFromCookie():any{
    return Cookies.get('token')?Cookies.get('token')?.split(':')[4].split('}')[0].slice(1,-1):null
 }