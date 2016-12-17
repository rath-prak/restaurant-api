import express from "express";
import config from "../config";
import middleware from "../middleware";
import initializeDb from "../db";

let router = express();

//connect to db
initializeDb( db => {
  router.use(middleware({config, db}));
});

export default router;
