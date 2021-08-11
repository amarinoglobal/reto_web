const { Schema, model } = require("mongoose")

const phoneSchema = new Schema({
    id: {
        type: Number
    },

    name: {
        type: String,
        required: [true, 'El modelo del telefono es obligatorio'],
        unique: true
    },

    manufacter: {
        type: String
    },

    description: {
        type: String,
        required: [true, 'La descripción es obligatoria']
    },

    color: {
        type: String
    },

    price: {
        type: Number
    },

    imageFileName: {
        type: String
    },

    screen: {
        type: String
    },

    processor: {
        type: String
    },

    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    ram: {
        type: Number
    },

}, {
    timestamps: true
})

const Phone = model("Phone", phoneSchema)

module.exports = Phone