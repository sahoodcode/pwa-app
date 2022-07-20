export default function serviceW()
{
    let swUrl=  `${process.env.PUBLIC_URL}/serviceWDev.js`
    navigator.serviceWorker.register(swUrl).then((response)=>{
       
    }) 
}