const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "dfaupqy7x",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

module.exports = { cloudinary };
