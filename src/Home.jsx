import styles from './styles/Home.module.css'
import SearchBar from './components/searchbar/SearchBar'
import Navbar from './components/navbar/NavBar'

function Home() {
  return (
    <>
      <div className={styles.Navbar}><Navbar/></div>
      <div className={styles.SearchBar}><SearchBar/></div>
    </>
  )
}

export default Home
