import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { VideoListComponent } from "./pages/video-list/video-list.component";
import { VideoPlayerComponent } from "./pages/video-player/video-player.component";

const routes: Routes = [
  {
    path: "",
    component: VideoListComponent
  },
  {
    path: "video/:id",
    component: VideoPlayerComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
