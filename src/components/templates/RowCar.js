
import Trash from '../../img/trash.svg';
import Edit from '../../img/edit.svg';
const RowCar=({id,image,name,count,monto,bebidas, handleDelete, handleUpdate, navegite})=>{
    return(
        <tr className="text-center">
            <th scope="row" className="thMax">
                <img src={image} className="imgCar" />
                <span className="my-1 d-block ">{name}</span>
                <span className="my-1 d-block ">Cantidad: {count}</span>
                <span className="my-1 d-block ">Total: S/{monto}</span>
            
            </th>
           
            <td className="thMax">{
                bebidas.length >0? bebidas.map((be)=>{
                     return <small key={bebidas.id} className="d-block my-1 border-bottom">{be.name} - cantidad : {be.count}</small>  
                    }) :
                    <small className="d-block my-1 border-bottom"> No hay bebidas seleccionadas.</small>
                }
            </td>
            <td className="thMax">
                <div className="">
                    <img src={Trash} alt="..." className='p-2 m-2 cursor-pointer' onClick={handleDelete} data-id={id} />
                    <img src={Edit} alt="..."  className='p-2 m-2 cursor-pointer' onClick={handleUpdate} data-id={id}  />
                </div>
            </td>
        </tr>
    )
}
export default RowCar;