import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosService, Video } from '../services/video.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './Início.component.html',
  styleUrls: ['./Início.component.css']
})
export class HomeComponent implements OnInit {
  videos: Video[] = [];

  constructor(private videosService: VideosService) {}

  ngOnInit() {
    this.videosService.getVideos().subscribe({
      next: (videos) => this.videos = videos,
      error: (err) => console.error('Erro ao carregar vídeos', err)
    });
  }
}
