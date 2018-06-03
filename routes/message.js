var express = require('express');
var router = express.Router();
var Message = require('../moduls/message');

// start get messages
router.get('/', function(req, res, next) {
  Message.find({}, (err, messages)=>{
    if(err){
      res.json({ success:false, errMSG:err.message})
    }else{
      res.json({ success:true, messages:messages })
    }
  })
})// end get messages

// start post messages
router.post('/', (req, res, next)=>{
  let  name = req.body.name;
  let  email = req.body.email;
  let  message = req.body.message;

  var newMessage = new Message({
      name:name,
      email:email,
      message:message
    });
    Message.create(newMessage, (err)=>{
      if(err){
        res.json({success:false, errMSG:'cant send message ' + err.message})
      } else{
        res.json({success:true, MSG:'the massege are send'})
      }
    });
})// end post messages

// start remove messages
router.get('/:id/remove', (req, res, next)=>{
  Message.findByIdAndRemove(req.params.id, (err)=>{
    if (err) {
      res.json({success:false, err:err})
    }else{
      res.json({success:true, MSG:'removed'})
    }
  })
})// end remove messages

// start to get param by id
router.param('id', function(req, res, next, id){
  Message.findById(id, function(err, docs){
      if(err) throw err;
      else
      {
        req.id = docs;
        next();
      }
    });	
}) //end  get param by id

module.exports = router;