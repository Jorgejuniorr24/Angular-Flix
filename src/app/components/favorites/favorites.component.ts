import { Component, OnInit } from '@angular/core';
import { VideoService } from '../services/video.service.ts';  // Caminho corrigido
import { AuthService } from '../services/auth.service';    // Caminho corrigido
import { Video } from '../models/video.model';             // Caminho corrigido

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favoriteVideos: Video[] = [];  // Inicializado como um array vazio

  constructor(
    private videoService: VideoService,  // Injeção do serviço VideoService
    private authService: AuthService    // Injeção do serviço AuthService
  ) { }

  ngOnInit() {
    this.getFavoriteVideos();
  }

  getFavoriteVideos() {
    const userId = this.authService.getUserId();
    this.videoService.getFavoriteVideos(userId).subscribe(videos => {
      this.favoriteVideos = videos;
    });
  }

  removeFavorite(videoId: string) {
    const userId = this.authService.getUserId();
    this.videoService.removeFavorite(userId, videoId).subscribe(() => {
      this.getFavoriteVideos();
    });
  }
}
