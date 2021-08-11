import { Switch, Route, Redirect } from 'react-router-dom'
import IndexPage from './../pages/IndexPage/IndexPage'
import PhonesPage from './../pages/PhonesPage/PhonesPage'
import PhoneDetails from './../pages/PhoneDetails/PhoneDetails'
import PhoneForm from '../pages/PhoneForm/PhoneForm'
import Signup from '../pages/Signup/Signup'
import Login from '../pages/Login/Login'
import Profile from '../pages/Profile/Profile'

const Routes = ({ storeUser, loggedUser }) => {

    return (
        <Switch>
            <Route path="/" exact render={() => <IndexPage />} />
            <Route path="/telefonos" exact render={() => <PhonesPage loggedUser={loggedUser} />} />
            <Route path="/telefonos/detalle/:phone_id" render={props => <PhoneDetails {...props} />} />
            <Route path="/telefonos/crear" render={() => <PhoneForm />} />
            <Route path="/registro" render={props => <Signup {...props} />} />
            <Route path="/iniciar-sesion" render={props => <Login {...props} storeUser={storeUser} />} />
            <Route path="/mi-perfil" render={() => loggedUser ? <Profile loggedUser={loggedUser} /> : <Redirect to="/" />} />

        </Switch>
    )
}

export default Routes