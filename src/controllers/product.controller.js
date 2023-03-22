import Product from "../models/Product";

const addProduct = async (req, res) => {
    const newProduct = new Product(req.body);
    try {
        const savedProduct = await newProduct.save();
        res.json(savedProduct);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

const getProducts = (req, res) => {

}

const getOneProduct = (req, res) => {

}

const updateProduct = (req, res) => {

}

const deleteProduct = (req, res) => {

}

export {
    addProduct,
    getProducts,
    getOneProduct,
    updateProduct,
    deleteProduct
}