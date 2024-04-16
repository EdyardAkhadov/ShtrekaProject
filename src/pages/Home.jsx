import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar/Navbar'
import SearchBar from '../components/searchbar/SearchBar'


function Home() {
  return (
    <>
      <div className={styles.Navbar}><Navbar/></div>
      <div className={styles.SearchBar}><SearchBar/></div>
    </>
  )
}

export default Home
