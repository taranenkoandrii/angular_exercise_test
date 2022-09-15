import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { VideoService } from "../../services/video.service";
import { IVideo } from "../../models/video";

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent {

  constructor(private videoService: VideoService, private router: Router) { }

  videoList$: Observable<IVideo[]> = this.videoService.getAllVideos();
  displayedColumns: string[] = ['videoUrl', 'meetingName', 'length', 'nrOfParticipants', 'score', 'date'];

  getVideo(i: number) {
    this.router.navigate([`/video/${i}`]);
  }
}
