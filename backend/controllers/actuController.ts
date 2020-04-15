import {Request, Response} from 'express';

export default class ActuController {
    
    static get(request: Request, response: Response) {

        response.status(200).json({
                                    text: "Hi from Actu"
                                   });

           console.log("Hello from Actu");
    }
}