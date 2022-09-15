import { Pipe } from '@angular/core';

@Pipe({ name: 'getVideoId' })
export class GetYouTubeIDPipe {
  transform(url: string): any {
    return url.split('v=')[1].split('&')[0];
  };
}
