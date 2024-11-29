import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Video {
  id: number;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  views: number;
  uploadedAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  private apiUrl = 'http://localhost:3000/videos';

  constructor(private http: HttpClient) {}

  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.apiUrl);
  }

  getVideoById(id: number): Observable<Video> {
    return this.http.get<Video>(`${this.apiUrl}/${id}`);
  }
}
