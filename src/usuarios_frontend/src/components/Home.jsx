import './Home.css'
import Background from '../../public/background.png'
const Home = () => {
  
  return (
    <section className="header-container">
      <div className='img-container'>
        <img className='bg-img' src={Background} alt="" />
      </div>
      <div className='content-container'>
      <h1>Bienvenido a Bragi</h1>
      <h2>Descubre, conecta, crea</h2>
      </div>
      
    </section>
  )
}
export default Home