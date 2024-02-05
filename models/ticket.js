const mongoose = require('mongoose');
const { Schema } = mongoose;

const TicketSchema = new Schema({
    issue_description: {
        type: String,
        required: true,
        
    },
    assignedTo:{
        type: String,
        required: true,
        unique: true,
        
    },
    raisedTo:{
        type: String,
        required: true,
        unique: true
    },

  });

  const Ticket = mongoose.model('TicketAssigned',TicketSchema);
  module.exports = Ticket