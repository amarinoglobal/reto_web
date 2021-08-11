import './PhonesPage.css'

import PhonesList from './PhonesList'

import Container from 'react-bootstrap/esm/Container'

const PhonesPage = ({ loggedUser }) => {

    return (
        <Container>

            <PhonesList loggedUser={loggedUser} />

        </Container>
    )
}

export default PhonesPage