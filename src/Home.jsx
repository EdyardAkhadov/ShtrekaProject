import styles from './styles/Home.module.css'
import SearchBar from './components/searchbar/SearchBar'
import PopularStation from './components/popularroutes/PopularRoutes'
import Navbar from './components/navbar/Navbar'

function Home() {
  return (
    <>
      <div className={styles.Navbar}><Navbar/></div>
      <div className={styles.SearchBar}><SearchBar/></div>
      <div className={styles.PopularStation}><PopularStation/></div>
    </>
  )
}

export default Home
