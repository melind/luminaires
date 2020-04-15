import {Request, Response} from 'express';

export default class PartnersController {
    
    static get(request: Request, response: Response) {

        response.status(200).json({
                                    text: "Hi from Partners"
                                   });

           console.log("Hello from Partners");
    }
}