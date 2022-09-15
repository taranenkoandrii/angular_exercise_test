import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IVideo } from "../models/video";

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) {}

  getAllVideos() {
    return this.http.get<IVideo[]>('https://my-json-server.typicode.com/taranenkoandrii/angular_exercise/list');
  }
}
