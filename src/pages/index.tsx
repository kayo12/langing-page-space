
import Head from 'next/head'
import Main from '../components/Main'
import Planets  from '../components/Planets'
import Satelites from '../components/Satellites'
import Asteroides from '../components/Asteroids'
import Footer from '../components/Footer'



export default function Home() {

  


  return (
    
    <div className="container">
      <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"/>      </Head>
        <Main/>
        <Planets/>
        <Satelites/>
        <Asteroides/>
        <Footer/>
    </div>
  )
}
