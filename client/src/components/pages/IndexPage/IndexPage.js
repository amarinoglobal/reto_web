

import { Component } from 'react'
import { Carousel, Row, Col, Button, Form, Container } from "react-bootstrap"
import { Link } from 'react-router-dom'
import c1 from './c1.jpg'
import c2 from './c2.png'
import c3 from './c3.jpg'
import './IndexPage.css'
import logo from './logo.png'
import mars from './mars.png'
import andromeda from './andromeda.png'

class IndexPage extends Component {

    constructor() {
        super()
        this.state = {
        }
    }

    scrollUp() {
        window.scrollTo(0, 0)
    }

    render() {


        const style = {
            background: '#dc3545', color: 'white', display: 'flex', justifyContent: 'center', fontSize: '.7em', bottom: 0, margin: "0px 0px 0px 0px", width: '100%'
        }
        return (

            <>
                <Container fluid className="all  p-0 overflow-hidden">

                    <Carousel fade controls={false} >
                        <Carousel.Item >
                            <img
                                className="d-block  c "
                                src={c1}
                                alt="First slide"
                                style={{ margin: "0px" }} />

                        </Carousel.Item>
                        <Carousel.Item >
                            <img
                                className="d-block  c"
                                src={c2}
                                alt="Second slide"
                                style={{ margin: "0px" }} />


                        </Carousel.Item>
                        <Carousel.Item >
                            <img
                                className="d-block  c"
                                src={c3}
                                alt="Third slide"
                                style={{ margin: "0px" }} />

                        </Carousel.Item>
                    </Carousel>

                </Container>

                <footer style={style}>

                    <Container fluid >
                        <Row>
                            <Col md="3" className="p-3" >
                                <h5 className="title"><img
                                    alt="logo"
                                    src={logo}
                                    height="40"
                                    className="d-inline-block align-top"
                                />{' '}</h5><br />
                                <p align="justify">
                                    Con más de 400 puntos de venta, somos Líderes en telecomunicaciones durante más de 20 años, y ahora también, en servicios para las personas y el hogar

                                    Si estás buscando abrir tu propio negocio, y hacerlo rentable en poco tiempo, Phone House es la opción de éxito: te lo ponemos fácil.
                                </p>
                                <p>
                                    <Link className="color-light" to="/signup/y" > SignUp for Companies </Link>
                                </p>
                            </Col>
                            <Col md="3" className="p-3">
                                <h5 className="title text-center">Latest Destinations</h5>

                                <Row>
                                    <Col md={4}><img src={mars} style={{ height: "110px" }} alt={'samsung'} /></Col>
                                    <Col md={8}> <h5>Samsung</h5>
                                        <p align="justify">Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".</p>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col md={4}><img src={andromeda} style={{ height: "110px" }} alt={'huawei'} /></Col>
                                    <Col md={8}> <h5>Huawei</h5>
                                        <p align="justify">Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".</p>
                                    </Col>

                                </Row>
                            </Col>
                            <Col md="3" className="p-3">
                                <Row>
                                    <Col>
                                        <h5 className="title text-center">What People Say</h5>
                                        <p >"I must tell you how impressed I am by your customer service, I have contacted you twice now and each time I received a prompt reply plus the additionalattention of a manager. I have never received this kind of response from anyother spaceline tickets booking site." </p>
                                        <h6>Jeff Bezos</h6>
                                    </Col>
                                </Row>
                                <br /><br />
                                <Row>
                                    <Col>

                                        <p >"I must tell you how impressed I am by your customer service, I have contacted you twice now and each time I received a prompt reply plus the additionalattention of a manager. I have never received this kind of response from anyother spaceline tickets booking site." </p>
                                        <h6>Richard Branson</h6>
                                    </Col>
                                </Row>

                            </Col>
                            <Col md="3" className="p-3">
                                <h5 className="title text-center">Contact Us</h5>

                                <Form className={'pb-5'}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">

                                        <Form.Control type="text" placeholder="Your name" name='name' />

                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">

                                        <Form.Control type="email" placeholder="email" name='email' />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="name">

                                        <Form.Control type="text" placeholder="name" name='name' />
                                    </Form.Group>
                                    <p className="text-center"><Button bsPrefix="btn-dark" variant="primary"  >

                                        <strong> SEND</strong>
                                    </Button></p>
                                </Form>
                            </Col>
                        </Row>
                    </Container>

                </footer>

            </>
        )
    }
}

export default IndexPage