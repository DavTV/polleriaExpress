const Card = ({handleClickCard,id,name,image, price, description }) => {
    return ( 
        <div className="col-6 col-md-4 p-2 cursor-pointer" onClick={handleClickCard} >
            <div className="card shadow p-2" data-id={id} data-name={name} >
                <div className="contenedorImgCard">
                    <img src={image} className="w-100" alt={name} />
                </div>
                <div className="descripcionCard">
                    <p className="my-2 fw-bold">{name}</p>
                    <p className="text-danger">  S/{price}</p>
                    <p>{description}</p>
                    <button className="btn btn-danger my-2 py-2" >Ordenar</button>
                </div>

            </div>
        </div>
     );
}
 
export default Card;