import express from 'express'
import bcrypt from 'bcryptjs'

import mysql from 'mysql2'
import util from 'util'
import jwt from 'jsonwebtoken'
import env from 'dotenv'
import cookieParser from 'cookie-parser'

import { dirname } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from "mongoose";
import fileUpload from 'express-fileupload';


env.config()
import { generateAccessToken , generateRefreshToken , verifyAuth } from '../middleware/authJWT.js'



// files
import userController from '../controller/user.controller.js'
import companiesController from '../controller/companies.controller.js'
import reviewsController from '../controller/reviews.controller.js'

import userModel from '../model/user.model.js'
import companiesModel from '../model/companies.model.js'
import reviewsModel from '../model/review.model.js'




export {express , bcrypt , userController , userModel  , util , mysql , jwt , generateAccessToken , generateRefreshToken , verifyAuth , cookieParser , dirname ,path ,fileURLToPath , mongoose , companiesController , companiesModel , fileUpload , reviewsController , reviewsModel }