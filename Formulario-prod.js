import React, {Fragment, useState, useEffect}from 'react';

const FormularioProd =() => {
    const [datos, setDatos] = useState({
        name: '',
        price: '',
        nutrient: '',
        image: '',
    })
    
    const onChange = (event) =>{
        //console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }
    const crearProd = (event) =>{
        event.preventDefault();
        
        console.log(datos.name+ ' ' +datos.price+ ' ' +datos.nutrient)
    }
    
    

    return(
        <Fragment>
        <h1>Crear Producto</h1>
        <form className="row" onSubmit={crearProd}>
            <div className="col-md-3">
                <input
                    placeholder="Ingrese Nombre"
                    className="form-control"
                    type="text"
                    name="name"
                    onChange={onChange}
                    value={datos.name}
                />
            </div>
            <div className="col-md-3">
                <input
                    placeholder="Ingrese Precio"
                    className="form-control"
                    type="number"
                    name="price"
                    onChange={onChange}
                    value={datos.price}
                />
            </div>
            <div className="col-md-3">
                <input
                    placeholder="Ingrese Nutriente"
                    className="form-control"
                    type="text"
                    name="nutrient"
                    onChange={onChange}
                    value={datos.nutrient}
                />
            </div>
            <div className="col-md-3">
                <input type="file" name="image" onChange={onChange}/>
                   <button className="btn ">Subir</button> 
            </div>
            <div className="col-md-3">
                <button className="btn btn-primary" type="submit" onClick={crearProd}>Crear</button>
            </div>
        </form>
        </Fragment>
    );
}

export default FormularioProd;