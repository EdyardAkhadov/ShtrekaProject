import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import styles from './StationTable.module.css'
import Navbar from '../navbar/NavBar'
import axios from '../../axios'

export default function StationPage() {
  /*  const {stationName} = useParams();
    const [station, setStation] = useState();
    const [isLoading, setLoading] = useState(true);

  useEffect(() => {
      axios
      .get(`/stations/${stationName}`)
      .then((res) => {
        setStation(res.data);
        console.log(station.date);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        {isLoading ? <div>завантаження</div> : <div>{station.stationName}
      })*/

  return (
    <div>
        <Navbar/>
        <div>
        </div>
    </div>
  )
}
