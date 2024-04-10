// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product'); 
const User = require('./models/User'); 
const Order = require('./models/Order'); 
const Comment = require('./models/Comment'); 
const Cart = require('./models/Cart'); 

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check MongoDB connection status
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('MongoDB connected successfully');
});

app.use(express.json());
 
//get all products
app.get('/products', async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });

// Get a specific product by ID
app.get('/products/:id', async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(product);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });

// Create a new product
app.post('/products', async (req, res) => {
    try {
      const newProduct = new Product(req.body);
      const savedProduct = await newProduct.save();
      res.status(201).json(savedProduct);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });

// Update an existing product by ID
app.put('/products/:id', async (req, res) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(updatedProduct);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });

// Delete a product by ID
app.delete('/products/:id', async (req, res) => {
    try {
      const deletedProduct = await Product.findByIdAndDelete(req.params.id);
      if (!deletedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json({ message: 'Product deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });

  // Get all orders
app.get('/orders', async (req, res) => {
    try {
      const orders = await Order.find();
      res.json(orders);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  // Get a specific order by ID
  app.get('/orders/:id', async (req, res) => {
    try {
      const order = await Order.findById(req.params.id);
      if (!order) {
        return res.status(404).json({ error: 'Order not found' });
      }
      res.json(order);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  // Create a new order
  app.post('/orders', async (req, res) => {
    try {
      const newOrder = new Order(req.body);
      const savedOrder = await newOrder.save();
      res.status(201).json(savedOrder);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  // Update an existing order by ID
  app.put('/orders/:id', async (req, res) => {
    try {
      const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedOrder) {
        return res.status(404).json({ error: 'Order not found' });
      }
      res.json(updatedOrder);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  // Delete an order by ID
  app.delete('/orders/:id', async (req, res) => {
    try {
      const deletedOrder = await Order.findByIdAndDelete(req.params.id);
      if (!deletedOrder) {
        return res.status(404).json({ error: 'Order not found' });
      }
      res.json({ message: 'Order deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });

  ////////////////////////////////////////////////
  // Get all carts
app.get('/carts', async (req, res) => {
  try {
      const carts = await Cart.find();
      res.json(carts);
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
  }
});

// Get a specific cart by ID
app.get('/carts/:id', async (req, res) => {
  try {
      const cart = await Cart.findById(req.params.id);
      if (!cart) {
          return res.status(404).json({ error: 'Cart not found' });
      }
      res.json(cart);
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
  }
});

// Create a new cart
app.post('/carts', async (req, res) => {
  try {
      const newCart = new Cart(req.body);
      const savedCart = await newCart.save();
      res.status(201).json(savedCart);
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
  }
});

// Update an existing cart by ID
app.put('/carts/:id', async (req, res) => {
  try {
      const updatedCart = await Cart.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedCart) {
          return res.status(404).json({ error: 'Cart not found' });
      }
      res.json(updatedCart);
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
  }
});

// Delete a cart by ID
app.delete('/carts/:id', async (req, res) => {
  try {
      const deletedCart = await Cart.findByIdAndDelete(req.params.id);
      if (!deletedCart) {
          return res.status(404).json({ error: 'Cart not found' });
      }
      res.json({ message: 'Cart deleted successfully' });
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
  }
});

////////////////////////////////////////////////////////
// Get all comments
app.get('/comments', async (req, res) => {
  try {
      const comments = await Comment.find();
      res.json(comments);
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
  }
});

// Get a specific comment by ID
app.get('/comments/:id', async (req, res) => {
  try {
      const comment = await Comment.findById(req.params.id);
      if (!comment) {
          return res.status(404).json({ error: 'Comment not found' });
      }
      res.json(comment);
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
  }
});

// Create a new comment
app.post('/comments', async (req, res) => {
  try {
      const newComment = new Comment(req.body);
      const savedComment = await newComment.save();
      res.status(201).json(savedComment);
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
  }
});

// Update an existing comment by ID
app.put('/comments/:id', async (req, res) => {
  try {
      const updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedComment) {
          return res.status(404).json({ error: 'Comment not found' });
      }
      res.json(updatedComment);
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
  }
});

// Delete a comment by ID
app.delete('/comments/:id', async (req, res) => {
  try {
      const deletedComment = await Comment.findByIdAndDelete(req.params.id);
      if (!deletedComment) {
          return res.status(404).json({ error: 'Comment not found' });
      }
      res.json({ message: 'Comment deleted successfully' });
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
  }
});

/////////////////////////////////////////////////////////////
// Get all users
app.get('/users', async (req, res) => {
  try {
      const users = await User.find();
      res.json(users);
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
  }
});

// Get a specific user by ID
app.get('/users/:id', async (req, res) => {
  try {
      const user = await User.findById(req.params.id);
      if (!user) {
          return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
  }
});

// Create a new user
app.post('/users', async (req, res) => {
  try {
      const newUser = new User(req.body);
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
  }
});

// Update an existing user by ID
app.put('/users/:id', async (req, res) => {
  try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedUser) {
          return res.status(404).json({ error: 'User not found' });
      }
      res.json(updatedUser);
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
  }
});

// Delete a user by ID
app.delete('/users/:id', async (req, res) => {
  try {
      const deletedUser = await User.findByIdAndDelete(req.params.id);
      if (!deletedUser) {
          return res.status(404).json({ error: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
  }
});

  
  

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
