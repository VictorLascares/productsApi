import Product from "../models/Product";

const addProduct = async (req, res) => {
    const newProduct = new Product(req.body);
    try {
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        console.log({ msg: error.message });
    }
}

const getProducts = async (req, res) => {
    const products = await Product.find()
    res.json(products);
}

const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        res.json(product);
    } catch (error) {
        res.status(404).json({ msg: error.message });
    }
}

const updateProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
            new: true
        });
        res.json(updatedProduct);
    } catch (error) {
        res.status(404).json({ msg: error.message });
    }
}

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        res.json(deletedProduct);
    } catch (error) {
        res.status(404).json({ msg: error.message });
    }
}

export {
    addProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
}