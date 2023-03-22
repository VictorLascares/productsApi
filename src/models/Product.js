import { Schema, model } from 'mongoose';

const producSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imgURL: {
        type: String,
        required: true
    }
},{
    timestamps: true,
    versionKey: false
});

const Product = model('Product', producSchema);
export default Product;