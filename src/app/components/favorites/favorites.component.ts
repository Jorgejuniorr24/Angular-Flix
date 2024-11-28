import { Component, OnInit } from '@angular/core';
import { VideoService } from '../services/video.service';
import { AuthService } from '../services/auth.service';
import { Video } from '../models/video.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favoriteVideos: Video[];

  constructor(
    private videoService: VideoService,
    private authService: AuthService
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
