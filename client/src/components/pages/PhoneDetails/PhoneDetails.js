import { Component } from 'react'
import PhonesService from '../../../services/phones.service'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class PhoneDetails extends Component {

    constructor() {
        super()
        this.state = {
            phone: undefined
        }
        this.phonesService = new PhonesService()
    }

    componentDidMount() {

        const { phone_id } = this.props.match.params

        this.phonesService
            .getOnePhone(phone_id)
            .then(response => this.setState({ phone: response.data }))
            .catch(err => {
                if (err.response.data.code === 400) {
                    this.props.history.push('/telefonos')
                }
            })
    }

    render() {

        return (

            <Container>

                {!this.state.phone
                    ?
                    <h3>Cargando</h3>
                    :
                    <Row className="justify-content-around">
                        <Col md={6}>
                            <h1 >{this.state.phone.name}</h1>
                            <h3 style={{ color: "#dc3545" }}>{this.state.phone.manufacturer}</h3>
                            <p>{this.state.phone.description}</p>

                            <hr />

                            <p>Tamaño de pantalla: {this.state.phone.screen}</p>
                            <p>Color: {this.state.phone.color}</p>
                            <p>Procesador: {this.state.phone.processor}</p>
                            <p>Ram: {this.state.phone.ram} GB </p>
                            <strong>Precio:<p style={{ textDecorationLine: "line-through", color: "gray", fontSize: "0.8em" }}>€ {parseFloat(this.state.phone.price * 1.2).toFixed(0)}</p> <p style={{ textDecoration: 'none', color: "#dc3545", fontSize: "2em" }}>€ {this.state.phone.price}</p></strong>
                            <hr />

                            <Link to="/telefonos" className="btn btn-dark">Volver al listado</Link>

                        </Col>

                        <Col md={4}>
                            <img src={this.state.phone.imageFileName} alt={this.state.phone.name} style={{ width: '100%' }} />
                            <Link to="/telefonos" className="btn btn-block btn-danger"  >Comprar</Link>
                        </Col>
                    </Row>
                }

            </Container>
        )
    }
}


export default PhoneDetails