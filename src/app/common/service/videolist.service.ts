import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class VideolistService {
  url = "https://valuefy-assignment-x.herokuapp.com/api/getVideos";
  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    console.log("in video list service")
    // let headers: HttpHeaders = new HttpHeaders();
    // headers = headers.append('Source', 'Web');
    return this.http.get(this.url)
  }
}
