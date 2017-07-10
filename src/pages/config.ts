import { Component } from '@angular/core';


import { Http, Headers, RequestOptionsArgs } from '@angular/http';

const ConfigURL = "http://localhost:3000/";

@Component({
    providers: []
})

export class MyHttp {
    constructor(public http: Http) {
    }

    post(url, data, cb) {
        let header = new Headers();
        //header.append('Content-Type','multipart/form-data; boundary=----WebKitFormBoundaryElhv3o75fbzQsVTw')
        //header.append('Access-Control-Allow-Origin','http://localhost:8100')
        //header.append('Access-Control-Allow-Headers','Content-Type')
        //header.append('Content-Type','application/form-data;')
        //header.append('Content-Type', 'application/x-www-form-urlencoded')
        header.append('Content-Type', 'application/json')

        var options: RequestOptionsArgs = {
            method: "POST",
            headers: header
        };
        console.log("1")
        this.http.post(ConfigURL + url, data, options).subscribe(Response => {
            var data = Response.json()
            return cb(data)
        }, error => {
            return cb(error)
        });

    }

}
