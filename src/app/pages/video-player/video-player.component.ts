import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";
import { Subscription } from "rxjs";
import { VideoService } from "../../services/video.service";
import { IVideo } from "../../models/video";

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit, OnDestroy {
  subscribers: Subscription[] = [];

  constructor(
    public videoService: VideoService,
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer) { }

  video?: any;
  id: any;

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    const subscriber = this.videoService.getAllVideos().subscribe((res: IVideo[]) => {
      this.video = res.filter((_, index) => index === this.id)
        .map((video: any) => this.getSafeVideo(video))[0];
    });
    this.subscribers.push(subscriber);
  }

  getSafeVideo(video: any) {
    return {...video, videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl(video.videoUrl.replace('watch?v=', 'embed/'))}
  }

  redirect() {
    this.router.navigate(['']);
  }

  ngOnDestroy() {
    this.subscribers.forEach(el => el.unsubscribe());
  }
}
