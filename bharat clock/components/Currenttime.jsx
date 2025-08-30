function Currenttime(){
   let Current_Date = new Date();
   let time= new Date();
  let day= new Date();
  return(
    <div className="Currenttime">
      <p>this is the current time:{Current_Date.toLocaleDateString()}-{time.toLocaleTimeString()}-{day.toLocaleDateString('en-US', { weekday: 'long' })}
        </p>

    </div>

  );
}
export default Currenttime;