import '../../css/shoppingCar.css';
import Close from '../../img/x.svg';
import RowCar from './RowCar';
import Chef from '../../img/chef-5989368_1280.png'
import { useCar } from '../../hook/useCar';
import { useState } from 'react';
const ShoppingCar=({openCar,setOpenCar,stateCar,dispatch,setItem})=>{
    // const [itemFind, setItemFind] = useState();
    // const {updateProductOfCar} = useOrden(itemFind);
    const {deleteProduct, updateProduct,navegite} = useCar(dispatch);
    const handleDelete=(e)=>{
        const id = e.target.getAttribute("data-id")
        deleteProduct(id);
    }

    const handleUpdate=(e)=>{
        const id = e.target.getAttribute("data-id")
        // updateProuct(id,itenFind);
        let item =  stateCar.find((el)=> el.id == id);
        let name = item.name
        name = name.split(" ").join("-");
        name = name.split("/").join("|");
        
        console.log(item);

            // item.dispatch = dispatch;
            // console.log('item :>> ', item);
            // setItemFind(item);
            // tengo que psarle el item porqu orden necesita el iten y la ruta esta establecida así
            navegite(`/orden/${name}`,{ state:{
                id:item.id,
                name:item.name,
                description:item.description,
                price:item.price,
                monto:item.monto,
                bebidas:item.bebidas,
                image:item.image,
                count:item.count
            }});
        
        setOpenCar(false)

    }

    return(
        <div className={openCar?"shoppingCar bg-danger openCar": "shoppingCar bg-danger"}>
               <img src={Close} className="p-2 cursor-pointer" onClick={()=>{setOpenCar(false)}} />
           <table className="table text-white table-borderless table-striped">
                <thead className="border-bottom text-center">
                    <tr>
                    <th scope="col" >Producto</th>
                    <th scope="col" >Bebidas</th>
                    <th scope="col" >Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        stateCar.length > 0 ?
                        stateCar.map((item)=>{
                            return(

                                <RowCar key={item.id} id={item.id} image={item.image} name={item.name} count={item.count} monto={item.monto} bebidas={item.bebidas} handleDelete={handleDelete} handleUpdate={handleUpdate}  />
                            )
                        }) :<tr><td colSpan="3" className='p-4 fw-bold'>No hay productos en el carrito aún. <br/><img src={Chef} className="chefCarrito mx-auto d-block m-3" alt="..."/></td></tr>

                    }
                       
                </tbody>
                </table>
               {
                   stateCar.length > 0 &&
                   <button className='btn btn-warning d-block my-3 mx-auto' onClick={()=>{alert("Esta función está en desarrollo.")}} >Hacer Pedido</button>

               } 
        </div>
    )
}
export default ShoppingCar;