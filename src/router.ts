// import * as express from 'express';
const express = require("express");
const router = express.Router();

import UserRouter from './controllers/trainee/routes';

// const router = express.Router();

router.use('/user', UserRouter);

module.exports = router;
