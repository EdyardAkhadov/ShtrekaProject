import React, { useState } from 'react'
import styles from '/src/styles/Searchbar.module.css'
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import { registerLocale} from  "react-datepicker";
import uk from 'date-fns/locale/uk';
import datePickerStyles from '/src/styles/DatePicker.module.css'
registerLocale('uk', uk)
import "react-datepicker/dist/react-datepicker.css";
import backgroundSearchbar from '/public/backgroundSearchbar.png'
import stationIcon from '/public/stationIcon.png'
import routeIcon from '/public/routeIcon.png'
import fromIcon from '/public/fromIcon.png'
import toIcon from '/public/toIcon.png'
import dateIcon from '/public/dateIcon.png'
import { render } from 'react-dom';

export default function SearchBar() {
  const [choosenDate, setStartDate] = useState(new Date());
  let day = choosenDate.getDate().toString();
  let mounth = choosenDate.getMonth();
  mounth+=1;
  mounth.toString();
  let year = choosenDate.getFullYear().toString();

  if(parseInt(day) < 10){
      day = "0"+day
  }
  
  if(parseInt(mounth) < 10){
      mounth = "0"+mounth
  }

  let date = day+"."+mounth+"."+year

  const [station1, setStation1] = useState('');
  const [station2, setStation2] = useState('');
  const [isRoute, setIsRoute] = useState(false);
  
  return (
    <div className={styles.Searchbar} style={{backgroundImage:`url(${backgroundSearchbar})`}}>
      <div className={styles.Searchbar__items}>
        <div className={styles.Searchbar__controller}>
          <div style={{position: "relative"}}>
                  <button onClick={() => setIsRoute(false)} 
                  className={styles.Controller__button__station} 
                  style={isRoute ? {} : {backgroundColor:"#e0f3d1", color:"#578b32"} }>Вокзал</button>
                  <img src={stationIcon} alt="stationIcon" className={styles.RouteAndStationIcon}/>
          </div>
          <div style={{position: "relative"}}>
          <button onClick={() => setIsRoute(true)} 
                  className={styles.Controller__button__route} 
                  style={isRoute ? {backgroundColor:"#e0f3d1", color:"#578b32"} : {} }  >Маршрут</button>
                  <img src={routeIcon} alt="routeIcon" className={styles.RouteAndStationIcon}/>
          </div>
        </div>
        <div className={styles.Searchbar__gets}>
          <div className={styles.input_container__from}>
            <input id="from" type="text" placeholder=" " 
                   className={styles.input}  
                   onChange={e => setStation1(e.target.value)} value={station1}/>
            <img src={fromIcon} alt="fromIcon" className={styles.FromAndToIcons}/>
            <label htmlFor="from" 
                   className= {isRoute ? styles.placeholder__no : styles.placeholder}>Вокзал</label>
            <label htmlFor="from" 
                   className={isRoute ? styles.placeholder : styles.placeholder__no}>Звідки?</label>
          </div>
          <div className={isRoute ? styles.input_container__to : styles.input_container__to__no}> 
            <input id="to" type="text" placeholder=" " 
                   className={styles.input}  
                   onChange={e => setStation2(e.target.value)} value={station2}/>
                   <img src={toIcon} alt="toIcon" className={styles.FromAndToIcons}/>
            <label htmlFor="to" className={styles.placeholder}>Куди?</label>
          </div>
          <div className={datePickerStyles.datepicker_container}>
             <DatePicker
                id="DatePicker"
                className={datePickerStyles.input} 
                selected={choosenDate} 
                onChange={(date) => setStartDate(date)} locale="uk"
                minDate={new Date()}
                dateFormat="dd.MM.yyyy"
                withPortal
                placeholderText='Дата'                
            />
            <img src={dateIcon} alt="dateIcon" className={datePickerStyles.datepicker_icon}/>
            <label htmlFor="DatePicker" className={datePickerStyles.placeholder}>Дата:</label>
          </div>
          <Link className={styles.link__button } 
                to={`/station/${station1}/${date}`}> 
                <button className={isRoute ? styles.invisible : styles.Searchbar__button}>Пошук</button>
          </Link>
          <Link className={styles.link__button } 
                to={`/routes/${station1}/${station2}/${date}`}>
                  <button className={isRoute ? styles.Searchbar__button: styles.invisible}>Пошук</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
