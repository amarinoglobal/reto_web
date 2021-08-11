import { Navbar, Nav, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from './logo.png'
import AuthService from '../../../services/auth.service'

const Navigation = ({ storeUser, loggedUser, showMessage }) => {

    const authserVice = new AuthService()

    const logout = () => {
        authserVice
            .logout()
            .then(() => {
                showMessage('Has cerrado sesión')
                storeUser(undefined)
            })
            .catch(err => console.log(err))
    }

    return (
        <Navbar bg="danger" variant="dark" expand="md" >
            <Navbar.Brand href="/"><Image src={logo} alt="logo" style={{ height: "70px", paddingLeft: "20px" }} /></Navbar.Brand >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
                <Nav className="mr-auto">
                    <Link className="nav-link" to="/">Inicio</Link>
                    <Link className="nav-link" to="/telefonos">Telefonos</Link>

                    {!loggedUser
                        ?
                        <>
                            <Link className="nav-link" to="/registro">Registro</Link>
                            <Link className="nav-link" to="/iniciar-sesion">Acceder</Link>
                        </>
                        :
                        <>
                            <Link className="nav-link" to="/mi-perfil">Perfil</Link>
                            <span className="nav-link" onClick={logout}>Cerrar sesión</span>
                        </>
                    }

                    <span className="nav-link">¡Hola, {loggedUser ? loggedUser.username : 'invitad@'}!</span>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default Navigation