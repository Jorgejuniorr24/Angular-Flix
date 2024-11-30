import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { VideosService, Video } from '../../authentication/services/video.service'; // Importando VideosService e Video
import { RouterModule } from '@angular/router'; // Importando RouterModule

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatInputModule, RouterModule], // Adicionando RouterModule aos imports
  templateUrl: './Início.component.html',
  styleUrls: ['./Início.component.css']
})
export class HomeComponent implements OnInit {
  videos: Video[] = []; // Adicionando a propriedade videos

  constructor(private videoService: VideosService) {}

  ngOnInit() {
    this.videoService.getVideos().subscribe((videos: Video[]) => {
      this.videos = videos;
    });
  }
}
