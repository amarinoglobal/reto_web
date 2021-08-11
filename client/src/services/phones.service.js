import axios from 'axios'

class PhonesService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/phones',
            withCredentials: true
        })
    }

    getPhones = () => this.app.get('/telefonos')
    getOnePhone = phone_id => this.app.get(`/getOnePhone/${phone_id}`)
    savePhone = phone_info => this.app.post('/newPhone', phone_info)
    deletePhone = (phone_id) => this.app.delete(`/deletePhone/${phone_id}`)
}

export default PhonesService