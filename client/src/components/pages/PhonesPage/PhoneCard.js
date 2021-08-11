import { Col, Card, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'

const PhoneCard = ({ name, imageFileName, _id, price, owned, deletePhone }) => {

    return (

        <Col md={3}>

            <Card className="phone-card  " >

                <Link to={`/telefonos/detalle/${_id}`} style={{ textDecoration: 'none', color: "black" }}>
                    <Card.Img variant="top" src={imageFileName} />
                </Link>

                <Card.Body style={{ paddingTop: "0px" }} >
                    <Card.Title align="center">{name}</Card.Title>
                    <Card.Title align="center" ><p style={{ textDecorationLine: "line-through", color: "gray", fontSize: "0.8em" }}>€ {parseFloat(price * 1.2).toFixed(0)}</p> <p style={{ textDecoration: 'none', color: "red" }}>€ {price}</p></Card.Title>
                    <p align="center">IVA incl. con envío gratis</p>

                    {/* {owned && <Button variant="warning" block onClick={editPhone}>Editar</Button>} */}
                    {owned && <Link to={`/telefonos`} onClick={() => deletePhone(_id)}>
                        <Button variant="danger" block size="sm">Eliminar</Button>
                    </Link>}
                </Card.Body>

            </Card>

        </Col>
    )
}

export default PhoneCard