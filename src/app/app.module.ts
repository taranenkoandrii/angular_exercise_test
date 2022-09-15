import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from "@angular/material/table";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { GetYouTubeIDPipe } from "./pipes/GetYouTubeID.pipe";
import { GetVideoLengthPipe } from "./pipes/getVideoLength.pipe";
import { LoaderComponent } from "./components/loader/loader.component";
import { VideoListComponent } from "./pages/video-list/video-list.component";
import { VideoPlayerComponent } from "./pages/video-player/video-player.component";

@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoPlayerComponent,
    GetYouTubeIDPipe,
    GetVideoLengthPipe,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
