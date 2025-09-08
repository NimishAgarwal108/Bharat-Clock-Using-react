import { useEffect, useState } from "react";

function Currenttime(){
   let Current_Date = new Date();
   let day= new Date();


  const[time,setTime]=useState(new Date());

  useEffect(()=>{
    const intervalId=setInterval(()=>{
      setTime(new Date())
    },1000);
    return()=>{
      clearInterval(intervalId);
              }

  },[]);



  return(
    <div className="Currenttime">
      <p>this is the current time:{Current_Date.toLocaleDateString()}-{time.toLocaleTimeString()}-{day.toLocaleDateString('en-US', { weekday: 'long' })}
        </p>

    </div>

  );
}
export default Currenttime;