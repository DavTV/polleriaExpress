// import { button } from "react-router-dom";
import Promociones from '../../img/dishes.svg';
import Chicken from '../../img/chicken.svg';
import Cola from '../../img/cola.svg';
import Food from '../../img/food.svg';

import '../../css/menu.css';
const Menu = ({setCategoria}) => {

    return ( 
        <div className= 'table-responsive bg-white shadow contenedorMenu p-2' >
            <ul className="menu m-0">
                <li className="">
                        <a  className="btn mx-2  pt-4 itemMenu "  onClick={(()=>{setCategoria("promociones")})} ><img src={Promociones}/> Promociones</a>
                        <a  className="btn  mx-2 pt-4  itemMenu " onClick={(()=>{setCategoria("populares")})}><img src={Food}/> Populares</a>
                        <a  className="btn  mx-2 pt-4  itemMenu " onClick={(()=>{setCategoria("pollos")})} ><img src={Chicken} />Pollos</a>
                        <a  className="btn  mx-2 pt-4  itemMenu " onClick={(()=>{setCategoria("bebidas")})}><img src={Cola} />Bebidas</a>
                </li>
            </ul>
        </div>
     );
}
 
export default Menu;