import {Request, Response} from 'express';

export default class LightSpotController {
    
    static get(request: Request, response: Response) {

        response.status(200).json({
                                    text: "Hi from LightSpot"
                                   });

           console.log("Hello from LightSpot");
    }
}