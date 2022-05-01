import { useState } from "react";

import './App.css';
import Linechart from './components/Linechart';
import { UserData } from "./Data";


function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "facebook users",
        data: UserData.map((data) => data.facebook),
        borderColor: "red",
        borderWidth: 2,
      },
      {
        label: "twitter users",
        data: UserData.map((data) => data.twitter),
        borderColor: "blue",
        borderWidth: 2,
      },
      {
        label: "instagram users",
        data: UserData.map((data) => data.instagram),
        borderColor: "green",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="app">
      <div className='chart'>
        <h1>chart here</h1>
        <Linechart chartData={userData} />
      </div>
    </div>
  );
}

export default App;
