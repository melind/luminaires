import {Request, Response} from 'express';

export default class AutomatismController {
    
    static get(request: Request, response: Response) {

        response.status(200).json({
                                    text: "Hi from lamp"
                                   });

           console.log("Hello from lamp");
    }
}