const mkdirp = require("mkdirp");
const multer = require("multer");
const path = require("path");
const mime = require("mime");
const fs = require("fs");

// image path for uploading image
const STORAGE = (uploadPath = '') => {
    return multer.diskStorage({
        destination: function (req, file, callback) {
            let dest = `uploads/${uploadPath}`;
            mkdirp.sync(dest);
            callback(null, dest);
        },
        filename: function (req, file, callback) {
            var fileUniquename = Date.now();

            callback(null, fileUniquename + path.extname(file.originalname));
        }
    });
}

//get profile picture format 1 for video and 2 for image
const PROFILE_IMAGE_FORMAT = (path = '') => {
    // PROFILE_IMAGE_FORMAT(req.file.filename)
    let typeOf = mime.lookup(path);
    return typeOf.includes('video') ? 1 : typeOf.includes('image') ? 2 : 0;
}

//remove the image from system
const DELETE_IMAGE = (path) => {
    // DELETE_IMAGE(req.file.path);
    fs.unlink(path, function () {
        return;
    })
}

const DEFAULT_FILE_ARRAY = (files) => {
    let image = [];
    files.map((file) => {
        image.push({
            actual_path: file.path,
            image_url: file.path.replace('uploads/', ""),
            file_format: PROFILE_IMAGE_FORMAT(file.filename)
        });
    })
    return image;
};

const DEFAULT_FILE = (file = {}) => {
    let data = {};
    data.actual_path = file.path;
    data.image_url = file.path.replace('uploads/', "");
    data.file_format = PROFILE_IMAGE_FORMAT(file.filename);
    data.is_social = 0;
    return data;
}
module.exports = {
    STORAGE,
    PROFILE_IMAGE_FORMAT,
    DELETE_IMAGE,
    DEFAULT_FILE,
    DEFAULT_FILE_ARRAY
};