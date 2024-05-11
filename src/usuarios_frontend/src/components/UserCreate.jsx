import { useCanister } from "@connect2ic/react";
import React, { useState } from "react";


const UserCreate = () => {
    const [usuarios_backend] = useCanister("usuarios_backend");
    const [loading, setLoading] = useState("");


    const saveUser = async (e) => {
        e.preventDefault();
        const form = e.target
        const nombre = form.nombre.value;
        const primerApellido = form.primerApellido.value;
        const segundoApellido = form.segundoApellido.value;
        const alias = form.alias.value;

        setLoading("Loading...");

        await usuarios_backend.createUser(nombre, primerApellido, segundoApellido, alias);
        setLoading("");

        {
            document.getElementById('btnUserList').click();
        }

        
    }

    
    return (
     
        <div className="row  mt-5">
            <div className="col-2"></div>
            <div className="col-8">
                {loading != "" 
                    ? 
                    <div className="alert alert-primary">{loading}</div>
                    :
                    <div></div>
                }
                <div className="card">
                    <div className="card-header">
                        Registrar Usuario
                    </div>
                    <div className="card-body">
                        <form onSubmit={saveUser} style={{display:"inline"}} >
                        <div className="form-group">
                            <label htmlFor="nombre" >Nombre usuario</label>
                            <input type="text" className="form-control" id="nombre" placeholder="Juan" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="primerApellido" >Primer apellido</label>
                            <input type="text" className="form-control" id="primerApellido" placeholder="Pérez" />
                        </div>
                            <div className="form-group">
                            <label htmlFor="segundoApellido" >Segundo apellido</label>
                            <input type="text" className="form-control" id="segundoApellido" placeholder="López" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="alias" >Alias</label>
                            <input type="text" className="form-control" id="alias" placeholder="juanito" />
                        </div>
                        <br />
                        <div className="form-group">
                            <input type="submit" className="btn btn-success" value="Agregar"/>  

                        </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-2"></div>

        </div>
    )
  }
  
  
  export default UserCreate