import Card from "./card"
import '../../css/products.css'
import { useNavigate } from "react-router-dom";

function Products({ data, setItem, categoria }) {
    let navegite = useNavigate();
    let newData = data.filter((el)=>categoria === el.categoria );
    // reparar
    // console.log(newData)
    const handleClickCard = (e) => {
        let id = e.target.closest('.card').getAttribute("data-id");
        let name = e.target.closest('.card').getAttribute("data-name");
        let item = data.filter((el) => el.id == id);
        item[0].bebidas=[];
        item[0].count=1;
        console.log(item);
        setItem(item);
        name = name.split(" ").join("-");
        name = name.split("/").join("|");
        navegite(`/orden/${name}`);
    };
    return (
        <>
        <h2 className="text-center py-2 my-4 text-uppercase">{categoria}</h2>
        <div className="row m-0 p-3 py-4 products">
            {newData.length > 0 ?
                newData.map(({ id, name, image, price, description }) => {
                    return  <Card handleClickCard={handleClickCard} key={id} name={name} image={image} price={price} description={description} id={id} />;

                }): < p className="text-center w-100"> <strong> No existen registrados aún.</strong></p>}
        </div>

        </>
    );
}

export default Products;