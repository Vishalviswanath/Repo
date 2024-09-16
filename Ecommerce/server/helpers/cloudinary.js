const cloudinary = require('cloudinary').v2;
const multer = require('multer');

cloudinary.config({
  cloud_name: 'dwykjpu4l',
  api_key: '656742471686349',
  api_secret: 'Cmn1bR4N31e9MZQqLS9E22zWZ4Y',
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: 'auto',
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
