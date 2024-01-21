import { useEffect, useState } from "react";


const Dashboard = () => {
    const [distance, setDistance] = useState(0);
    const [height, setHeight] = useState(0);

    const [speed, setSpeed] = useState(0);
    const [degree, setDegree] = useState(0);

    const [time, setTime] = useState(0);

    const seconds = 2;



    //beginning of useEffect
    useEffect(() => { 
      let vert = 0;
      let horz = 0;
      let timer = setInterval(() => {
      
      vert = Math.sin((Math.PI / 180) * (degree)) * speed * (seconds/3600);
      horz = Math.cos((Math.PI / 180) * (degree)) * speed * (seconds/3600);

      setDistance((prevDistance) => (( parseFloat(prevDistance,10) + parseFloat(horz,10) ).toFixed(4)));
      setHeight((prevHeight) => (( parseFloat(prevHeight,10) + parseFloat(vert,10) ).toFixed(4)));
      setTime((prevTime) => prevTime + seconds);
    }, seconds * 1000);
  
    
    return () => clearTimeout(timer)
    }, [speed, degree]); 
    //end of useEffect

    const updateSpeed = (e) => {
      setSpeed(Number(e.target.value))

    }

    const updateDegree = (e) => {
      setDegree(Number(e.target.value))

    }



    return (
      <div>
        <h2>Elapsed Time: {time} seconds</h2>
        <h2>You have traveled {distance} miles</h2>
        <h2>You have an altitude of {height} miles</h2>
        <br></br>
        <h2>You are travelling at {speed} mph with an angle of {degree} degrees</h2>

          <label for="speed">Speed (mph) </label>
          <input
            type="number"
            value={speed}
            onChange={updateSpeed}
            id="speed"
          />
        <br></br>
        <label for="degree">Angle (Degrees) </label>
        <input
            type="number"
            value={degree}
            onChange={updateDegree}
          />
      </div>
    );

}

export default Dashboard;