const express = require('express')
const router = express.Router()
const { handleMongoooseError, isValidIdFormat } = require('../utils')

const Phone = require('./../models/Phone.model')



router.get('/telefonos', (req, res) => {

    Phone
        .find()
        .select('name imageFileName manufacturer price owner')
        .sort({ createdAt: 1 })
        .then(response => setTimeout(() => res.json(response), 4000))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching phones', err }))
})


router.get('/getOnePhone/:phone_id', (req, res) => {

    const { phone_id } = req.params

    if (isValidIdFormat(phone_id)) {

        Phone
            .findById(phone_id)
            .then(response => res.json(response))
            .catch(err => res.status(500).json({ code: 500, message: 'Error fetching phone', err }))

    } else {
        res.status(500).json({ code: 400, message: 'Invalid URL' })
    }

})


router.post('/newPhone', (req, res) => {

    const phone = { owner: req.session.currentUser._id, ...req.body }

    Phone
        .create(phone)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching phone', errors: handleMongoooseError(err) }))
})


router.put('/editPhone/:phone_id', (req, res) => {

    const phone = req.body

    Phone
        .findByIdAndUpdate(req.params.phone_id, phone)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing phone', err }))
})

router.delete('/deletePhone/:phone_id', (req, res) => {

    Phone.findByIdAndRemove(req.params.phone_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error deleting phone', err }))

})

module.exports = router