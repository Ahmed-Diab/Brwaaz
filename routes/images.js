const express = require('express');
const router = express.Router();
const Images = require('../moduls/images');
var multer = require('multer');
const fs = require('fs');
const path = require('path');
var im = require('imagemagick');    



// multer fun
// start path to save images & rename images
const storage = multer.diskStorage({
    destination: 'public/src/',
    filename: function(req, file, cd){
        cd(null, file.filename + '-' + Date.now() + path.extname(file.originalname));
    }
  })// end path to save images & rename images

  // start handel multer file size and use check file type fun
  const upload = multer({
     storage:storage,
     limits: {fileSize: 100000000000},
     fileFilter: function(req, file, cb){
       checkFileType(file, cb);
     }
  }).single('photo') // end handel multer file size and use check file type fun

// start check file type 
  function checkFileType(file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype)
    if(mimetype && extname){
      return cb(null, true);
    } else{
      cb('Error: must be image');
    }
  } // end check file type 
// end multer fun

// start get images
router.get('/', (req, res, next)=>{
    Images.find({}, (err, images)=>{
if(err){
    res.json({success:false, errMSG:err})
}else{
    res.json({success:true, images:images})
}
    })
}) // end get images

// start post new image
router.post('/', (req, res, next)=>{
    upload(req, res, (err) => {
        if(err)  {
          return err;
        } else{
            im.resize({
                srcPath:  process.cwd() + '/public/src/' + req.file.filename,
                dstPath:  process.cwd() + '/public/build/small_'+req.file.filename,
                width:150
              }, function(err, stdout, stderr){
                if (err) {
                    console.log('error while resizing images' + stderr);
                };
                console.log( process.cwd() + '/tmp/Images/' + req.file.filename + 'has been resized and saved as ' + process.cwd() + '/tmp/Images/resized_'+req.file.filename)
              });
            let alt = req.body.alt,
            category = req.body.category;
            sp_category = req.body.sp_category,
            original_image = req.file.filename,
            small_image =  'small_' + req.file.filename;

            var newImage = new Images({
                alt:alt,
                original_image:original_image,
                small_image: small_image,
                category:category,
                sp_category:sp_category
            })

            Images.create(newImage, (err)=>{
                if(err){
                    res.json({success:false, errMSG:err})
                }else{
                    res.json({success:true, MSG:'saved'});
                }
                })
            }
    });
}) // end post new image

// start remove image from db
router.get('/remove/:id', (req, res, next)=>{
    Images.findByIdAndRemove(req.params.id, (err, images)=>{
    if(err){
        res.json({success:false, errMSG:err})
    }else{
        res.json({success:true, MSG:'removed done'});
        // remove original_image from src folder
        fs.unlink('./public/src/'+images.original_image, (err) => {
            if (err) throw err;
          });
       // remove small_image from build folder
        fs.unlink('./public/build/'+ images.small_image, (err) => {
            if (err) throw err;
          });
    }
        })
}) // end remove image from db

// start to get param by id
router.param('id', function(req, res, next, id){
    Images.findById(id, function(err, docs){
        if(err) throw err;
        else
        {
          req.id = docs;
          next();
        }
      });	
  }) //end  get param by id



module.exports = router;