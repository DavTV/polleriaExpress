import { useState } from 'react';
export const useOrden = (item, dataBebidas) => {
    
    const [monto, setMonto] = useState(item.monto || item.price);
    console.log(monto)
    const addProduct = () => {
        item.count = item.count + 1;
        setMonto(monto + item.price);
        // updateProductoMonto(monto);

    }
    const deleteProduct = () => {
        if (item.count > 1) {
            item.count = item.count - 1;
            setMonto(monto - item.price);
            // updateProductoMonto(monto);
        }
    }

    const addBebida = (priceB, countB, nameB,idB) => {

        let booleano = false;
        let countBebida = parseInt(countB.textContent) + 1;
        setMonto(monto + priceB);
        countB.textContent = countBebida;
        if (item.bebidas.length < 1) {
            item.bebidas.push({ "name": nameB, price: priceB, "count": countBebida ,"id":idB });
        } else {
            item.bebidas.map((b) => {
                if (b.name === nameB) {
                    b.count = countBebida;
                    booleano = true;
                    return;
                }
            })
            if (!booleano) {
                item.bebidas.push({ "name": nameB, price: priceB, "count": countBebida, "id":idB });
            }
        }

    }
    const deleteBebida = (priceB, countB, nameB) => {
        if (parseInt(countB.textContent) !== 0) {
            setMonto((monto - priceB));
            let countBebida = parseInt(countB.textContent) - 1;
            countB.textContent = countBebida;
            item.bebidas.map((b) => { if (b.name === nameB) b.count = countBebida; })
            item.bebidas = item.bebidas.filter((b) => b.count !== 0)

        }

    }
    const handleBebida = (e) => {
        let idBebida = parseInt(e.target.getAttribute("data-id"));
        let { price, name, id } = dataBebidas.find((be) => idBebida === be.id);
        let bebidaOperation = e.target.getAttribute("data-operation-bebida");
        let bebidaValue;

        if (bebidaOperation === "restar") {
            bebidaValue = e.target.nextSibling;
            deleteBebida(price, bebidaValue, name);

        } else {
            bebidaValue = e.target.previousSibling;
            addBebida(price, bebidaValue, name,id);
        }
    }
    return {
        monto, addProduct, deleteProduct, handleBebida
    }
};