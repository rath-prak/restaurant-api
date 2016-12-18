import mongoose from 'mongoose';
import { Router } from 'express';
import Restaurant from '../model/restaurant';

export default({ config, db }) => {
  let api = Router();

  // CRUD -  read, create, update, delete

  // '/v1/restaurant/add'
  api.post('/add', (req, res) => {
    let newRest = new Restaurant();
    newRest.name = req.body.name;

    newRest.save( err => {  // the .save is a mongoose method
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Restaurant saved sucessfully!'});
    });
  });

  // '/v1/restaurant - read'

  api.get('/', (req, res) => {
      Restaurant.find({}, (err, restaurants) => {
        if(err) {
          res.send(err);
        }
        res.json(restaurants);
      });
  });

  // '/v1/restaurant/:id - read id only
  api.get('/:id', function (req, res){
    Restaurant.findById(req.params.id, function(err, restaurant){
      if(err) {
        res.send(err);
      }
      res.json(restaurant);
    });
  });

  // '/v1/restaurant/:id - update

  api.put('/:id', function (req, res) {
    Restaurant.findById(req.params.id, function(err, restaurant){
      if(err) {
        res.send(err);
      }
      restaurant.name = req.body.name;
      restaurant.save(function(err){
        if (err) {
          res.send(err);
        }
        res.json({ message: "restaurant has been updated"});
      })
    });
  });



  return api;
}
