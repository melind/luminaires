import {Request, Response} from 'express';

export default class WallLightController {
    
    static get(request: Request, response: Response) {

        response.status(200).json({
                                    text: "Hi from Wall light"
                                   });

           console.log("Hello from wall ligtht");
    }
}