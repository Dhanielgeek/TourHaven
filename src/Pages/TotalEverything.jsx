import React,{useEffect, useState} from 'react'
import './Page.css'

const TotalEverything = () => {

const [Client, setClient] = useState(0)
const [Hotels, setHotels] = useState(0)
const [Satisfaction, setSatisfaction] = useState(0)

const TargetClient = 180
const TargetHotels = 200
const TargetSatifaction = 100

useEffect(() => {
  const clientInterval = setInterval(() => {
    if (Client >= TargetClient) {
      clearInterval(clientInterval);
    } else {
      setClient(Client + 1);
    }
  }, 50);

  const hotelsInterval = setInterval(() => {
    if (Hotels >= TargetHotels) {
      clearInterval(hotelsInterval);
    } else {
      setHotels(Hotels + 1);
    }
  }, 50);

  const satisfactionInterval = setInterval(() => {
    if (Satisfaction >= TargetSatifaction) {
      clearInterval(satisfactionInterval);
    } else {
      setSatisfaction(Satisfaction + 1);
    }
  }, 50);

  return () => {
    clearInterval(clientInterval);
    clearInterval(hotelsInterval);
    clearInterval(satisfactionInterval);
  };
}, [Client, Hotels, Satisfaction]);



  return (
    <div className="TotalEverything">
      <div className="TotalContainer">
        <div className="TotalClient">
          <h3>{Client}</h3>
          <h2>Clients</h2>
        </div>
        <div className="TotalHotels">
          <h3>{Hotels}</h3>
          <h2>Hotels</h2>
        </div>
        <div className="TotalSatisfaction">
          <h3>{Satisfaction}%</h3>
          <h2>Satisfaction</h2>
        </div>
      </div>
    </div>
  )
}

export default TotalEverything