import {Request, Response} from 'express';

export default class ChandelierController {
    
    static get(request: Request, response: Response) {

        response.status(200).json({
                                    text: "Hi from chandelier"
                                   });

           console.log("Hello from Chandelier");
    }
}