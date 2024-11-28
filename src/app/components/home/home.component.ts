import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { VideoService } from '../services/video.service';
import { Video } from '../models/video.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videos: Video[];
  searchForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private videoService: VideoService
  ) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      query: new FormControl('')
    });

    this.getVideos();
  }

  getVideos() {
    this.videoService.getVideos().subscribe(videos => {
      this.videos = videos;
    });
  }

  searchVideos() {
    const query = this.searchForm.get('query').value;
    this.videoService.searchVideos(query).subscribe(videos => {
      this.videos = videos;
    });
  }
}
