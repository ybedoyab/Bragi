import { useCanister, useConnect } from "@connect2ic/react";
import React, { useEffect, useState } from "react";
import Home from './Home'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Users = () => {
  
  const [usersBackend] = useCanister("usuarios_backend");
  const {principal} = useConnect();
  
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState("");
  const [idUser, setIdUser] = useState("");
  const [alias, setAlias] = useState("");

  const [showModalEditar, setShowModalEditar] = useState(false);
  const [showModalEliminar, setShowModalEliminar] = useState(false);

  const updateUser = async () => {
    console.log('aui')
    const form = document.getElementById("formEditar")
    
    const nombre = form.nombre.value;
    const primerApellido = form.primerApellido.value;
    const segundoApellido = form.segundoApellido.value;
    const alias = form.alias.value;

    setLoading("Loading...");

    await usersBackend.updateUser(idUser, nombre, primerApellido, segundoApellido, alias);
    setLoading("");
    setIdUser("")

    setShowModalEditar(false);
    obtieneUsuarios();
  }


    
  const handleShowModalEditar = async (idUsuario) => {
    setShowModalEditar(true);
    setIdUser(idUsuario)
    
    const usuario = await usersBackend.readUserById(idUsuario);

    const form = document.getElementById("formEditar")
    form.nombre.value = usuario[0].nombre
    form.primerApellido.value = usuario[0].primerApellido
    form.segundoApellido.value = usuario[0].segundoApellido
    form.alias.value = usuario[0].alias

  }

  const handleShowModalEliminar = async (idUsuario, alias) => {
    setShowModalEliminar(true);
    setAlias(alias)
    setIdUser(idUsuario)
      

  }

  const handleCloseModalEditar = () => setShowModalEditar(false);
  const handleCloseModalEliminar = () => setShowModalEliminar(false);

  useEffect(() => {
      obtieneUsuarios();
  }, []);

 
  const obtieneUsuarios = async () => {
      setLoading("Loading...");
      try {
        var usersRes = await usersBackend.readUsers();
        setUsers(usersRes);   
        // usersRes.forEach((user, index) => {
        //   console.log("user" +user.nombre);
        // });   
        setLoading("");

      } catch(e) {
          console.log(e);
          setLoading("Error happened fetching users list");
      }

  }

  
  
  const deleteUser = async (e) => {

    setLoading("Loading...");

    await usersBackend.deleteUser(idUser);
    setLoading("");
    setIdUser("")
    setAlias("")
    setShowModalEliminar(false);
    
    obtieneUsuarios()
  }
  
 
  return(
    <>
    { principal 
      ? 
      <div className="row  mt-5">
        <div className="col">
          {loading != "" 
            ? 
              <div className="alert alert-primary">{loading}</div>
            :
              <div></div>
          }
          <div className="card">
            <div className="card-header">
              Lista de usuarios
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Primer apellido</th>
                    <th>Segundo apellido</th>
                    <th>Alias</th>
                    <th colSpan="2">Opciones</th>
                  </tr>
                </thead>
                <tbody id="tbody">
                  {users.map((user) => {
                    return (
                      <tr key={user.id}>
                        <td>{user.nombre}</td>
                        <td>{user.primerApellido}</td>
                        <td>{user.segundoApellido}</td>
                        <td>{user.alias}</td>
                        <td>
                          <button type="button" className="btn btn-primary" onClick={() => handleShowModalEditar(`${user.id}`)}>Editar</button>
                        </td>
                        <td>
                          <button type="button" className="btn btn-danger" onClick={() => handleShowModalEliminar(`${user.id}`,user.alias)}>Eliminar</button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>         
            </div>
          </div>
        </div>

        <Modal show={showModalEditar} onHide={handleCloseModalEditar}>
          <Modal.Header closeButton>
            <Modal.Title>Actualizar usuario</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="card">
              <div className="card-body">
                {loading != "" 
                  ? 
                  <div className="alert alert-primary">{loading}</div>
                  :
                  <div></div>
                }
                <form style={{display:"inline"}} id="formEditar" >
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
                </form>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModalEditar}>
              Cerrar
            </Button>
            <Button variant="primary"  onClick={updateUser}>
              Guardar
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={showModalEliminar} onHide={handleCloseModalEliminar}>
          <Modal.Header closeButton>
            <Modal.Title>Confirmación</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="card">
              <div className="card-body">
                {loading != "" 
                  ? 
                  <div className="alert alert-primary">{loading}</div>
                  :
                  <div></div>
                }
                <p> Deseas eliminar el usuario con alias {alias}</p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModalEliminar}>
              Cerrar
            </Button>
            <Button variant="danger"  onClick={deleteUser}>
              Eliminar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    : 
      <Home />
    }
    </>
  )
}
  
  
export default Users