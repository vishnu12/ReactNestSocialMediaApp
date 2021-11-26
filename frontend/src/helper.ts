 import Cookies from 'js-cookie';
 import axios from 'axios'

 const API_URL='http://localhost:5000'
 
 export function readDataFromCookie():void{
    const cookie= Cookies.get('token')?Cookies.get('token')?.split(':')[4].split('}')[0].slice(1,-1):null
    localStorage.setItem('user',JSON.stringify(cookie))
 }

 export async function uploadImage(file:File,fieldname:string):Promise<any>{
    console.log(fieldname);
    
    try {
      const formData=new FormData()
      formData.append(`${fieldname}`,file)
      return await axios.post(`${API_URL}/posts/upload`,formData,{
         headers: {
           'Content-Type': 'multipart/form-data'
         }
     })
      
    } catch (error) {
       console.log(error)
   
    }
 }