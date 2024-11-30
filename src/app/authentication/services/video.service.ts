import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

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
  private favoriteVideos: Video[] = [];  // Simulação de vídeos favoritos

  constructor(private http: HttpClient) {}

  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.apiUrl);
  }

  getVideoById(id: number): Observable<Video> {
    return this.http.get<Video>(`${this.apiUrl}/${id}`);
  }

  // Métodos para obter e remover vídeos favoritos
  getFavoriteVideos(userId: string): Observable<Video[]> {
    // Simulação: Retornar todos os vídeos como favoritos
    return of(this.favoriteVideos);
  }

  removeFavorite(userId: string, videoId: number): Observable<void> {
    // Simulação: Remover vídeo favorito
    this.favoriteVideos = this.favoriteVideos.filter(video => video.id !== videoId);
    return of();
  }
}
