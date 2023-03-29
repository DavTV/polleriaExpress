import '../../css/orden.css';
import { useOrden } from "../../hook/useOrden";
import { useCar } from "../../hook/useCar";
import { useLocation } from "react-router-dom";
const Orden = ({item,dispatch}) => {
    let  dataBebidas=[
        {id:1, name: 'Coca Cola 1.5 L', price: 9.50,count:0},
        {id:2, name: 'Coca Cola 1.5 L Zero', price: 9.00,count:0},
        {id:3, name: 'Inca Koca Cola 1.5 L Zero', price: 9.00,count:0},
        {id:4, name: 'Inca Kola 1.5 L', price: 9.50,count:0}, 

    ]
    
    const location = useLocation();
    if(location.state != null){
        item[0] = location.state;
        item[0].update=true;
        let bebidasOrden = item[0].bebidas;
        let newBebidas = [];
        let aux = false;
    
       dataBebidas.map((el)=>{
           bebidasOrden.map((be)=>{
               if(be.id == el.id){
            
                   newBebidas.push(be);
                   aux = true;
            }
            
        })
        if(aux != true){
            newBebidas.push(el);
        }
        aux=false;
            
       });
       dataBebidas = newBebidas;
    }
    const {monto,addProduct,deleteProduct,handleBebida} = useOrden(item[0],dataBebidas);
    const {navegite,addCar,updateProduct} = useCar(dispatch);

    const handleAddCar=()=>{
        if(item[0].update){
            updateProduct(item[0],monto);
        }else{

            addCar(item[0],monto);
        }
    }
    
    return ( 
        <div className="container shadow p-3 bg-white my-3 rounded">
            <div className="d-flex justify-content-end my-2" onClick={()=>{navegite(`/`)}}><button className="btn btn-danger" >X</button></div>
            {
            item[0] ?
            <div className="row">
                <div className="col-12 col-md-6">
                     <img src={item[0].image} alt={item[0].name} className="w-100 rounded" /> 
                     <div className="d-flex justify-content-between p-2 my-3 rounded text-white border">
                            <button className="btn btn-danger" onClick={handleAddCar} >{item[0].update ? "Actualizar Pproducto S/ " : "Agregar al carrito S/ " }<span>{monto}</span> </button>
                            <div className="btn-group">
                                <button className="btn border" onClick={deleteProduct}>-</button>
                               
                                <span  className="btn ">{item[0].count}</span>


                                <button className="btn border" onClick={addProduct}>+</button>
                            </div>
                        </div>
                </div>
                <div className="col-12 col-md-6">
                    <h2>{item[0].name}</h2>
                    <p>{item[0].description}</p>
                    <small  className="fw-bold text-danger"> S/{item[0].price}</small>
                    <hr/>
                    <div>
                        <span className="fw-bold">¿Deseas agregar una bebida?(opcional)</span>
                        {
                            dataBebidas.length > 0 ?
                            dataBebidas.map((el)=>{
                                return(
                                <div className="d-flex justify-content-between p-3 border-bottom" key={el.id}>
                                <span>
                                    {el.name} - S/{el.price} 
                                </span>
                                <div className="btn-group">
                                    <button className="btn border" data-id={el.id} data-operation-bebida="restar" onClick={handleBebida}>-</button>
                                    <span  className="btn  ">{el.count}</span>

                                    <button className="btn border" data-operation-bebida="sumar" data-id={el.id} onClick={handleBebida}>+</button>
                                </div>
                                </div> )
                                }) : <p>Aún no hay bebidas disponibles.</p>
                        }

                    </div>

                </div>
            </div>
            :<div className="p-2 text-center"><p>Aún no hay productos seleccionados.</p></div>
        
        
        }
        </div>
     );
}
 
export default Orden;
