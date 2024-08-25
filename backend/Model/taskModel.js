const { model, Schema } = require("mongoose");

const taskModel = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  status: {
    type: Boolean,
    default: false,
  },
});

module.exports = model('Task', taskModel);