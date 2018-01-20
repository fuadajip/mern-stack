var express = require('express');
var app = express();

var router = express.Router();

var Item = require('./models/Item');

router.route('/add').post((req,res)=> {
    var item = new Item(req.body);
    item.save(function(err, task) {
        if (err)
            res.send(err);
        res.status(200).json(task);
    });
});

router.route('/get').get((req,res)=>{
    Item.find((err, items) => {
        if(err){
            console.log(err);
        }
        res.status(200).json(items);
    });
   
});

router.route('/edit/:id').put((req,res)=> {
    Item.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
})

router.route('/delete/:id').get((req, res) => {
    Item.findByIdAndRemove({_id: req.params.id},
         (err, item) => {
          if(err) res.json(err);
          else res.json('Successfully removed');
      });
});

module.exports = router;
  