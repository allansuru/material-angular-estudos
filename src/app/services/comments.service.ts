import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';



@Injectable()

export class CommentService extends DataService {

    constructor(http: Http) {
        super('http://jsonplaceholder.typicode.com/comments', http);
    }



}


