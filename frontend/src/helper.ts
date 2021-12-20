 import Cookies from 'js-cookie';
 import axios from 'axios'
 import {toast} from 'react-toastify'

 const API_URL=process.env.REACT_APP_API_URL
 
 export function readDataFromCookie():void{
    const cookie= Cookies.get('token')?Cookies.get('token')?.split(':')[4].split('}')[0].slice(1,-1):null
    localStorage.setItem('user',JSON.stringify(cookie))
 }

 export async function uploadImage(file:File,fieldname:string,type:string):Promise<any>{
    try {
      const formData=new FormData()
      formData.append(`${fieldname}`,file)
      return type==='post'?await axios.post(`${API_URL}/posts/upload`,formData,{
         headers: {
           'Content-Type': 'multipart/form-data'
         }
     }):
     type==='cover'?await axios.post(`${API_URL}/user/upload/cover`,formData,{
              headers: {
                'Content-Type': 'multipart/form-data'
              }
          })
          :
      await axios.post(`${API_URL}/user/upload/profile`,formData,{
               headers: {
                  'Content-Type': 'multipart/form-data'
               }
            })
      
    } catch (error) {
       toast.error('Image Upload Failed')
   
    }
 }


 export function getImageUrl(url:string|undefined,type:string):string{
   return url?`${API_URL}/${url}`:type==='cover'?'images/cover.jpg':type==='profile'?'images/sample-profile-pic.png':''
 }


 export function isLoggedInUser(loggedInUser:string|undefined,currentUser:string|undefined):boolean{
    return loggedInUser===currentUser
 }



export function isAdded(list:string[],currentUserId:string|undefined):boolean{
   return list?.some(itm=>itm===currentUserId)
}

