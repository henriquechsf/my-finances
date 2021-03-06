const mongoose = require('mongoose')

const Account = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    balance: {
      type: Number,
      default: 0
    },
    incomeAmount: {
      type: Number,
      default: 0
    },
    expensesAmount: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Account', Account)
