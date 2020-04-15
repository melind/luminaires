import {Request, Response} from 'express';

export default class JobsController {
    
    static get(request: Request, response: Response) {

        response.status(200).json({
                                    text: "Hi from Jobs"
                                   });

           console.log("Hello from Jobs");
    }
}