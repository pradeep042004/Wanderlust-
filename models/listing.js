const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
       type: String,
       required: true
    },
    description: {
       type: String,
      
    },
   image: {
    type: String,
    default: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
    set: (v) =>
        v === ""
            ? "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800"
            : v
},

    price: Number,
    location: String,
    country: String
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;