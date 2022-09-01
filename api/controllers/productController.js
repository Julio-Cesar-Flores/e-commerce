import Product from "../models/Product.js";

const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    return res.json({
      //status code 200
      msg: "Producto creado",
      data: {
        product: newProduct,
      },
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al crear producto",
      error,
    });
  }
};

const getAllProducts = async (_, res) => {
  try {
    const products = await Product.find();
    return res.json({
      msg: "Productos encontrados",
      data: products,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al buscar productos",
      error,
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({
        msg: "No existe el producto",
      });
    }
    return res.json({
      msg: "Producto encontrado",
      data: {
        product,
      },
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al buscar product por id",
      error,
    });
  }
};

const updateProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedproduct = await product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.json({
      msg: "product actualizado",
      data: { product: updatedproduct },
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al actualizar product",
      error,
    });
  }
};

const deleteProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    return res.json({
      msg: "Elemento eliminado",
      data: { product },
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al borrar product por id",
      error,
    });
  }
};

export {
  getAllProducts,
  createProduct,
  getProductById,
  updateProductById,
  deleteProductById,
};
