import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { VideosService, Video } from '../../authentication/services/video.service';

@Component({
  selector: 'app-exibicao-de-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Exibição-de-vídeo.component.html',
  styleUrls: ['./Exibição-de-vídeo.component.css']
})
export class ExibiçãoDeVideoComponent implements OnInit {
  video: Video | null = null;

  constructor(
    private route: ActivatedRoute,
    private videosService: VideosService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.videosService.getVideoById(id).subscribe({
      next: (video) => this.video = video,
      error: (err) => console.error('Erro ao carregar detalhes do vídeo', err)
    });
  }
}
