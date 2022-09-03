import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

const addProductToCart = async (req, res) => {
  try {
    // TODO: Falta restarle al inventario

    let msg;
    const { productId, quantity } = req.body;
    let cart = req.Cart;
    const product = await Product.findById(productId);
    if (cart && product) {
      const { name, price } = product;
      let itemIndex = cart.products.findIndex((p) => p.productId == productId);

      if (itemIndex > -1) {
        let productItem = cart.products[itemIndex];
        productItem.quantity = quantity;
        cart.products[itemIndex] = productItem;
        msg = "Producto modificado";
      } else {
        cart.products.push({ productId, quantity, name, price });
        msg = "Producto agregado";
      }
      const total = cart.products.reduce((acc, p) => {
        return acc + p.price * p.quantity;
      }, 0);
      cart.total = total;

      cart = await cart.save();
      return res.status(201).json({
        msg,
        data: {
          cart: cart,
        },
      });
    } else {
      return res.status(400).json({
        msg: "Error no hay carrito",
      });
    }
  } catch (error) {
    return res.status(500).json({
      msg: "Error al agregar producto ",
      error,
    });
  }
};

export { addProductToCart };
