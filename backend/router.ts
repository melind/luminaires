import  dotenv from 'dotenv';
dotenv.config();


import express from 'express';
import bodyparser from 'body-parser';

import ActuController from './controllers/actuController';
import ChandelierController from './controllers/chandelierController';
import ContactController from './controllers/contactController';
import HomeController from './controllers/homeController';
import LampController from './controllers/lampController';
import LamppostController from './controllers/lamppostController';
import PartnersController from './controllers/partnersController';
import PresentationController from './controllers/presentationController';
import ReferencesController from './controllers/referencesController';
import FlightSpotController from './controllers/lightSpotController';
import WallLightController from './controllers/wallLightController';

const router: express.Router = express.Router();

const bodyParser = bodyparser.urlencoded({extended: true});


router.get('/', HomeController.home);

router.route('/contact') 
  .get(ContactController.get)
  .post(bodyParser, ContactController.post);

router.get('/actualities', ActuController.get);
router.get('/lamp', LampController.get);
router.get('/lamppost',LamppostController.get);
router.get('/chandelier', ChandelierController.get);
router.get('/partners', PartnersController.get);
router.get('/presentation', PresentationController.get);
router.get('/references', ReferencesController.get);
router.get('/flight-spot', FlightSpotController.get);
router.get('/wall-light', WallLightController.get);




export default router;


