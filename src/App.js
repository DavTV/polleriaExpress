import './App.css';
import Header from './components/templates/Header';
import { HashRouter,Routes, Route } from 'react-router-dom';
import Reservation from './components/pages/Reservation';
import Home from './components/pages/Home';
import Orden from './components/pages/Orden';
import Error404 from './components/templates/Error404';
import { useReducer,useState } from 'react';
import { carInitialState, reducer } from './components/reducer/carReducer';

function App() {

  const initialData = [
    {
      id: 1,
      name: "Pollo 1/4",
      image: "https://www.peru.travel/Contenido/General/Imagen/pe/256/1.1/pollo-a-la-brasa.jpg",
      price: 12.50,
      description: "Esta es una descripción de ejemplo para llenar el campo de la la descripción en la descripción de los productos.",
      categoria: "pollos"
    },
    {
      id: 2,
      name: "Pollo 1/2",
      image: "https://buenazo.cronosmedia.glr.pe/original/2021/05/24/60ac32a1b8ecfe147c041613.jpg",
      price: 24.50,
      description: "Esta es una descripción de ejemplo para llenar el campo de la la descripción en la descripción de los productos.",
      categoria: "promociones"
    },
    {
      id: 3,
      name: "Pollo 1",
      image: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/4457RHNHONFQHGUF5PK7MN6NUQ.png",
      price: 50.50,
      description: "Esta es una descripción de ejemplo para llenar el campo de la la descripción en la descripción de los productos.",
      categoria: "populares"
    },
    {
      id: 4,
      name: "Pollo 1.5",
      image: "https://larepublica.cronosmedia.glr.pe/original/2022/07/14/62d0808ff02c09157475a263.jpg",
      price: 45.50,
      description: "Esta es una descripción de ejemplo para llenar el campo de la la descripción en la descripción de los productos.",
      categoria: "pollos"
    },
    {
      id: 5,
      name: "Pollo con cremas",
      image: "https://peru21.pe/resizer/wHwI08ga06qYXmP93jFEJwmGnf0=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/UM7KUSCNXFED7IRS6DKSZL4CME.jpg",
      price: 48.50,
      description: "Esta es una descripción de ejemplo para llenar el campo de la la descripción en la descripción de los productos.",
      categoria: "pollos"
    },
    {
      id: 6,
      name: "Coca Cola",
      image: "https://corporacionliderperu.com/40305-large_default/coca-cola-gaseosas-normal-x-3-lt.jpg",
      price: 18.50,
      description: "Esta es una descripción de ejemplo para llenar el campo de la la descripción en la descripción de los productos.",
      categoria: "bebidas"
    },
    
    {

      id: 7,
      name: "Mostrito 3",
      image: "https://grupochios.com/wp-content/uploads/2022/02/mostrito.jpg",
      price: 48.50,
      description: "Esta es una descripción de ejemplo para llenar el campo de la la descripción en la descripción de los productos.",
      categoria: "pollos"
    },
    {

      id: 8,
      name: "Sprite",
      image: "https://juntozstgsrvproduction.blob.core.windows.net/default-blob-images/orig_Unidad-720320_%2063280.jpg",
      price: 20.50,
      description: "Esta es una descripción de ejemplo para llenar el campo de la la descripción en la descripción de los productos.",
      categoria: "bebidas"
    },
    
  ]
  // const [car, setCar] = useState([]);
  const [state,dispatch]=useReducer(reducer,carInitialState)
  const [data, setData]= useState(initialData);
  const [item, setItem] = useState({})
  const [categoria, setCategoria] = useState("promociones");
  // const [itemUpdate, setItemUpdate] = useState({});
  return (
    <div className="App overflow-hidden">
      <HashRouter>
         
        <Header stateCar={state.car} dispatch={dispatch} setItem={setItem}  />
        <Routes>
            <Route path='/' element={<Home   data={data} setItem={setItem} categoria={categoria} setCategoria={setCategoria} />}></Route>
            <Route path='/reservacion' element={<Reservation/>}></Route>
            {/* <Route path='/productos' element={<Products data={data}  setItem={setItem} />}></Route> */}
            <Route path='/orden/:name/' element={<Orden data={data}  dispatch={dispatch}  item={item} />}></Route>
            <Route  path='*' element={<Error404 />}/>

        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
