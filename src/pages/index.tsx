
import Main from '../components/Main'
import Planets  from '../components/Planets'
import Satelites from '../components/Satelites'
import Astros from '../components/Astros'
import Footer from '../components/Footer'



export default function Home() {

  return (
    <div className="container">
        <Main/>
        <Planets/>
        <Satelites/>
        <Astros/>
        <Footer/>
    </div>
  )
}
