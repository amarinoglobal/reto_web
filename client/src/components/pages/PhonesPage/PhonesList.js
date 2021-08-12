import { Component } from 'react'
import PhonesService from './../../../services/phones.service'
import { Row, Button, Modal } from 'react-bootstrap'
import PhoneCard from './PhoneCard'
import PhoneForm from '../PhoneForm/PhoneForm'
import Spinner from '../../shared/Spinner/Spinner'

class PhonesList extends Component {

    constructor() {
        super()
        this.state = {
            phones: undefined,
            modal: false
        }
        this.phonesService = new PhonesService()
    }


    loadPhones = () => {
        this.phonesService
            .getPhones()
            .then(response => this.setState({ phones: response.data }))
            .catch(err => console.log(err))
    }


    componentDidMount = () => {
        this.loadPhones()
    }


    deletePhone = phone_id => {

        if (window.confirm('¿Estas seguro de borrar este teléfono? ')) {

            this.setState({
                phones: this.state.phones.filter(elm => elm._id !== phone_id)
            })

            this.phonesService.deletePhone(phone_id)
                .then(() => console.log('Teléfono eliminado correctamente'))
                .catch(err => console.log(err))
        }
    }


    render() {

        return (

            !this.state.phones
                ?
                <div style={{ position: "absolute", left: "50%", marginLeft: "-100px", top: "50%", marginTop: "-100px" }}> <Spinner size='lg' shape='circle' /></div>
                
                :
                (
                    <>
                        <h1>Catalogo de teléfonos</h1>
                        {this.props.loggedUser && <Button onClick={() => this.setState({ modal: true })} variant="dark" style={{ marginBottom: '20px' }}>Crear nuevo teléfono</Button>}

                        <Row>
                            {this.state.phones.map(elm => <PhoneCard key={elm._id} {...elm} owned={this.props.loggedUser?._id === elm.owner} deletePhone={this.deletePhone} />)}
                        </Row>

                        <Modal show={this.state.modal} onHide={() => this.setState({ modal: false })}>
                            <Modal.Header>
                                <Modal.Title>Nuevo teléfono</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <PhoneForm refreshPhones={this.loadPhones} closeModal={() => this.setState({ modal: false })} />
                            </Modal.Body>
                        </Modal>
                    </>
                )
        )
    }
}

export default PhonesList
