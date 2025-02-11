const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
     image:
    //  {
    //     filename: { 
    //         type: String, 
    //         default: "https://unsplash.com/photos/a-small-pond-in-the-middle-of-a-grassy-field-Pb6NGo0cf0I",  // Default filename if needed
    //     },
    //     url: { 
    //         type: String, 
    //         default: "https://unsplash.com/photos/a-small-pond-in-the-middle-of-a-grassy-field-Pb6NGo0cf0I" 
    //     }
    // },
     
     {
        type: String,
        default: 
        "https://unsplash.com/photos/a-small-pond-in-the-middle-of-a-grassy-field-Pb6NGo0cf0I",
        set: (v) =>
            v === ""
                ? "https://unsplash.com/photos/a-small-pond-in-the-middle-of-a-grassy-field-Pb6NGo0cf0I"
                : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;