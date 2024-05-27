import styles from './styles/Home.module.css'
import mainStyles from './styles/MainStyles.module.css'
import SearchBar from './components/searchbar/SearchBar'
import Navbar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import PopularRoutes from './components/popularRoutes/PopularRoutes'

function Home() {
  return (
    <div className={mainStyles.wrapper}>
      <div className={styles.Navbar}><Navbar/></div>
      <div className={styles.SearchBar}><SearchBar/></div>
      <div className={styles.popularRoutes}><PopularRoutes/></div> 
      <div className={mainStyles.Footer}><Footer/></div>
    </div>
  )
}

export default Home
