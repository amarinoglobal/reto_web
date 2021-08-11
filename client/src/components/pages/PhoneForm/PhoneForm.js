import { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import PhonesService from '../../../services/phones.service'
import UploadsService from '../../../services/uploads.service'
import Spinner from '../../shared/Spinner/Spinner'


class PhoneForm extends Component {

    constructor() {
        super()
        this.state = {
            phone: {
                name: '',
                manufacter: '',
                description: '',
                color: '',
                price: '',
                imageFileName: '',
                screen: '',
                processor: '',
                ram: ''
            },
            loading: false,
            errors: undefined
        }
        this.phonesService = new PhonesService()
        this.uploadsService = new UploadsService()
    }


    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ phone: { ...this.state.phone, [name]: value } })
    }


    handleFormSubmit = e => {
        e.preventDefault()

        this.phonesService
            .savePhone(this.state.phone)
            .then(() => {
                this.props.closeModal()
                this.props.refreshPhones()
                this.setState({ phone: { name: '', manufacturer: '', description: '', color: '', price: '', imageFileName: '', screen: '', processor: '', ram: '' } })
            })
            .catch(err => this.setState({ errors: err.response.data.errors }))
    }


    handleFileUpload = e => {

        this.setState({ loading: true })

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        this.uploadsService
            .uploadImage(uploadData)
            .then(response => {
                this.setState({
                    loading: false,
                    phone: { ...this.state.phone, imageFileName: response.data.cloudinary_url }
                })
            })
            .catch(err => console.log(err))
    }


    render() {
        return (
            <Container>

                <Form onSubmit={this.handleFormSubmit}>

                    <Form.Group controlId="name">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" value={this.state.phone.title} onChange={this.handleInputChange} name="name" />
                    </Form.Group>
                    <Form.Group controlId="manufacter">
                        <Form.Label>Marca</Form.Label>
                        <Form.Control type="text" value={this.state.phone.manufacter} onChange={this.handleInputChange} name="manufacter" />
                    </Form.Group>

                    <Form.Group controlId="description">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control type="text" value={this.state.phone.description} onChange={this.handleInputChange} name="description" />
                    </Form.Group>

                    <Form.Group controlId="color">
                        <Form.Label>Color</Form.Label>
                        <Form.Control type="text" value={this.state.phone.color} onChange={this.handleInputChange} name="color" />
                    </Form.Group>
                    <Form.Group controlId="price">
                        <Form.Label>Precio</Form.Label>
                        <Form.Control type="number" value={this.state.phone.price} onChange={this.handleInputChange} name="price" />
                    </Form.Group>

                    <Form.Group controlId="screen">
                        <Form.Label>Tamaño de pantalla en pulgadas</Form.Label>
                        <Form.Control type="text" value={this.state.phone.screen} onChange={this.handleInputChange} name="screen" />
                    </Form.Group>

                    <Form.Group controlId="processor">
                        <Form.Label>Procesador</Form.Label>
                        <Form.Control type="text" value={this.state.phone.processor} onChange={this.handleInputChange} name="processor" />
                    </Form.Group>
                    <Form.Group controlId="ram">
                        <Form.Label>RAM</Form.Label>
                        <Form.Control type="text" value={this.state.phone.ram} onChange={this.handleInputChange} name="ram" />
                    </Form.Group>
                    <Form.Group controlId="imageFileName">
                        <Form.Label>Imagen (file) </Form.Label>
                        <Form.Control type="file" onChange={this.handleFileUpload} />
                    </Form.Group>

                    {this.state.loading && <Spinner size='sm' shape='circle' />}

                    <Button style={{ marginTop: '20px', width: '100%' }} variant="dark" type="submit" disabled={this.state.loading}>
                        {this.state.loading ? 'Subiendo...' : 'Crear telefono'}
                    </Button>

                </Form>

            </Container >
        )
    }
}

export default PhoneForm