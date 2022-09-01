import Category from "../models/Category.js";

const createCategory = async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    return res.json({
      //status code 200
      msg: "Categoria creada",
      data: {
        Category: newCategory,
      },
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al crear Categoria",
      error,
    });
  }
};

const getAllCategorys = async (_, res) => {
  try {
    const Categorys = await Category.find();
    return res.json({
      msg: "Categoriass encontradas",
      data: Categorys,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al buscar Categorias",
      error,
    });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const Category = await Category.findById(id);
    if (!Category) {
      return res.status(404).json({
        msg: "No existe la Categoria",
      });
    }
    return res.json({
      msg: "Categoria encontrada",
      data: {
        Category,
      },
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al buscar Categoria por id",
      error,
    });
  }
};

const updateCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCategory = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.json({
      msg: "Categoria actualizado",
      data: { Categoria: updatedCategory },
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al actualizar Categoria",
      error,
    });
  }
};

const deleteCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const Category = await Category.findByIdAndDelete(id);
    return res.json({
      msg: "Categoría eliminado",
      data: { Category },
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al borrar Categoría por id",
      error,
    });
  }
};

export {
  getAllCategorys,
  createCategory,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
};
