import NavBar from "./NavBar";
import ShoppinCar from "./ShoppingCar";
import Menu from '../../img/list.svg';
import Cel from '../../img/telephone.svg';
import Car from '../../img/bag-check.svg';
import Close from '../../img/x.svg';
import Chef from '../../img/chef.svg'
import '../../css/header.css'
import { useRef,useState } from "react";

const Header = ({stateCar,dispatch,setItem}) => {
    // console.log(stateCar , "desde header")
    const [menu, setMenu] = useState(false);
    const [openCar, setOpenCar] = useState(false);
    const boton = useRef();
    const ChangeButton =()=>{
        if(boton.current.getAttribute("data-aux")=="menu"){
            boton.current.src= Close;
            boton.current.setAttribute("data-aux","close")
            setMenu(true);
        }else{
            boton.current.src= Menu;
            boton.current.setAttribute("data-aux","menu")
            setMenu(false);
        }
    }
    return ( 
        <div className="d-flex  justify-content-between align-items-center bg-danger p-2 header">
            <div>
                <img src={Menu} ref={boton} data-aux="menu" onClick={ChangeButton} className="mx-2 icon"/>
                {/* <span className="fw-bold text-white py-3 d-block">Flamenco</span> */}
                <img src={Chef} alt = "logo" className="mx-2 icon logo" />
            </div>
            <div>
                <img src={Cel}  className="mx-2 icon"/>
                <img src={Car}  className="mx-2 icon" onClick={()=>{setOpenCar(true)}}/>
            </div>
            <NavBar menu={menu} changeButton={ChangeButton} />
            <ShoppinCar openCar={openCar} setOpenCar={setOpenCar} stateCar={stateCar} dispatch={dispatch} setItem={setItem} />
        </div>
     );
}
 
export default Header;