import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../services/video.service';
import { Video } from '../models/video.model';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {
  video: Video;

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService
  ) { }

  ngOnInit() {
    const videoId = this.route.snapshot.paramMap.get('id');
    this.getVideoDetails(videoId);
  }

  getVideoDetails(videoId: string) {
    this.videoService.getVideoById(videoId).subscribe(video => {
      this.video = video;
      this.updateViewCount();
    });
  }

  updateViewCount() {
    this.videoService.updateViewCount(this.video.id).subscribe();
  }
}
