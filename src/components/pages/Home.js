import Portada from '../../img/portadaPollo.jpg';
import '../../css/home.css'
import Menu from '../templates/Menu';
import Products from './Products';
const Home = ({ data, setItem, categoria, setCategoria}) => {

    return ( 
        <div>
            <div className='contenedorPortada position-relative '>
                <div className='cortina row align-items-center  p-5 text-white'>
                    <div>
                    <h2 className='h1 text-uppercase'>Disfruta del mejor pollo a la brasa del Perú</h2>
                    <h3 >La mejor calidad a los mejores precios</h3>
                    </div>
                </div>
                    <img src={Portada} alt="Portada" className='w-100 h-100 imgPortada ' />

            </div>
        <Menu  setCategoria={setCategoria} />
        
        <Products  data={data} setItem={setItem} categoria={categoria} />
        
       
        </div>
     );
}
 
export default Home;