const { Schema, model } = require('mongoose');


const PizzaSchema = new Schema({
  pizzaName: {
    type: String
  },
  createBy: {
    type: String
  },
  createAt: {
    type: Date,
    default: Date.now
  },
  size: {
    type: String,
    default: 'Large'
  },
  toppings: []
});


// create the Pizza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

// export the Pizza model
module.exports = Pizza;