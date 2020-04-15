import {Request, Response} from 'express';

export default class LamppostController {
    
    static get(request: Request, response: Response) {

        response.status(200).json({
                                    text: "Hi from Lamppost"
                                   });

           console.log("Hello from Lamppost");
    }
}