import mongoose from 'mongoose';

const ScoresheetSchema = new mongoose.Schema({
    scale1: Number,
    scale2: Number,
    scale3: Number,
    etude1: Number,
    etude2: Number,
    etude1comments: String,
    etude2comments: String,
});

module.exports = mongoose.models.Scoresheet || mongoose.model('Scoresheet', ScoresheetSchema)