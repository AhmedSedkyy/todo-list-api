const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true 
    },
    description: String,
    isCompleted: {
        type: Boolean,
        default: false
    }
    }, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);