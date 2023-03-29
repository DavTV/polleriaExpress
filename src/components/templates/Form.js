import Wps from "../../img/whatsapp.svg"
const Form = () => {
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("Envio exitoso.")
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="celular" className="form-label">Nro de celular</label>
                <input type="number" className="form-control" id="celular" required />
            </div>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre completo</label>
                <input type="text" className="form-control" id="nombre"  required/>
            </div>
            <div className="mb-3">
                <label htmlFor="hora" className="form-label">Hora de entrega</label>
                <input type="time" className="form-control" id="hora" required />
            </div>
            <div className="mb-3">
                <label htmlFor="fecha" className="form-label">Fecha de entrega</label>
                <input type="date" className="form-control" id="fecha" required />
            </div>
            <div className="mb-3">
                <label htmlFor="orden" className="form-label">Orden personalizada</label>
                <textarea className="form-control" id="orden" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-danger">Hacer Pedido  <img src={Wps} alt="WhatsApp" className="mx-2" /> </button>
        </form>
    );
}
 
export default Form;