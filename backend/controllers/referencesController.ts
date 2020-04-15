import {Request, Response} from 'express';

export default class ReferencesController {
    
    static get(request: Request, response: Response) {

        response.status(200).json({
                                    text: "Hi from References"
                                   });

           console.log("Hello from References");
    }
}