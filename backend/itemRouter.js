var express = require('express');
var app = express();

var router = express.Router();

var Item = require('./models/Item');

router.route('/add').post((req, res) => {
    var item = new Item(req.body);
    item.save(function (err, task) {
        if (err)
            res.send(err);
        res.status(200).json(task);
    });
});

router.route('/get').get((req, res) => {
    Item.find((err, items) => {
        if (err) {
            console.log(err);
        }
        res.status(200).json(items);
    });

});

// Defined edit route
router.route('/edit/:id').get(function (req, res) {
    var id = req.params.id;
    Item.findById(id, function (err, item) {
        res.json(item);
    });
});

//  Defined update route
router.route('/update/:id').post(function (req, res) {
    Item.findById(req.params.id, function (err, item) {
        if (!item)
            return next(new Error('Could not load Document'));
        else {
            // do your updates here
            item.item = req.body.item;

            item.save().then(item => {
                    res.json('Update complete');
                })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});


router.route('/delete/:id').get((req, res) => {
    Item.findByIdAndRemove({
            _id: req.params.id
        },
        (err, item) => {
            if (err) res.json(err);
            else res.json('Successfully removed');
        });
});

module.exports = router;