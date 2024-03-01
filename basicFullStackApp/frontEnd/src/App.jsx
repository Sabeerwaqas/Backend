import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  const getData = () => {
    axios.get("http://localhost:5000/api/dummyData")
    .then((response)=>{
      console.log("Data=>", response.data)
      setData(response.data)
    })
    .catch((e)=>{
      console.log(e)
    })
  }
  
  // console.log(data)
  
  useEffect(()=>{
  getData();
  },[])


  return (
    <>
     {
  data.map((person, index) => {
    // You need to return JSX from the map function
    return (
      <h1 key={index}>
        {person.name} {/* Assuming person is a string */}
      </h1>
    );
  })
}

    </>
  )
}

export default App
