import { TYPES } from "../components/action/carAction";
import { useNavigate } from "react-router-dom";
export const useCar =(dispatch)=>{
    let navegite = useNavigate(); 
    // pasarle el dispatch
    const addCar=(item,monto)=>{
        item.monto= monto;
        alert(item.name + " Fue agregado Correctamente.");
        dispatch({type:TYPES.ADDITEM, payload:item})
        navegite(`/`);
    }
    const deleteProduct=(id)=>{
        // console.log("desde hook",id)
        // alert("lego al useCar",id);
        dispatch({type:TYPES.DELETEITEM, payload:id})
    }

    const updateProduct=(item)=>{
        // console.log("desde editProduct",id)
        dispatch({type:TYPES.UPDATEITEM, payload: item})
        navegite(`/`);
    }

    return {navegite,addCar,deleteProduct,updateProduct}
}