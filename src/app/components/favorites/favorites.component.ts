import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosService, Video } from '../../authentication/services/video.service';  // Caminho correto para VideosService e Video
import { AuthService } from '../../authentication/services/auth.service';    // Caminho correto para AuthService

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favoriteVideos: Video[] = [];  // Inicializado como um array vazio

  constructor(
    private videoService: VideosService,  // Injeção do serviço VideosService
    private authService: AuthService    // Injeção do serviço AuthService
  ) { }

  ngOnInit() {
    this.getFavoriteVideos();
  }

  getFavoriteVideos() {
    this.authService.getUser$().subscribe(user => {
      const userId = user?.sub || '';  // Garantir que userId é uma string válida
      if (userId) {
        this.videoService.getFavoriteVideos(userId).subscribe((videos: Video[]) => {
          this.favoriteVideos = videos;
        });
      }
    });
  }

  removeFavorite(videoId: number) {  // Alterado para number
    this.authService.getUser$().subscribe(user => {
      const userId = user?.sub || '';  // Garantir que userId é uma string válida
      if (userId) {
        this.videoService.removeFavorite(userId, videoId).subscribe(() => {
          this.getFavoriteVideos();
        });
      }
    });
  }
}
