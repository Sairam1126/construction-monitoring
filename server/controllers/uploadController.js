// controllers/uploadController.js
const uploadFile = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }
  res.status(200).json({ filePath: `/uploads/${req.file.filename}` });
};

module.exports = { uploadFile };
