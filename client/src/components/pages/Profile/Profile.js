import { Container, Image } from "react-bootstrap"
import wall from "./wall.webp"

const Profile = ({ loggedUser }) => {

    return (

        <Container align="center">
            <h1>¡Bienvenid@, {loggedUser.username}!</h1>
            <h4>Estas en The Phone Cave, el mejor lugar para comprar y vender telefonos moviles</h4>
            <Image src={wall} alt="Phone" style={{ width: "70%" }} />

        </Container>

    )
}

export default Profile