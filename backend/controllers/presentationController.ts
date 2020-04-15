import {Request, Response} from 'express';

export default class PresentationController {
    
    static get(request: Request, response: Response) {

        response.status(200).json({
                                    text: "Hi from Presentation"
                                   });

           console.log("Hello from Presentation");
    }
}