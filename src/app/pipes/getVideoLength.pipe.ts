import { Pipe } from '@angular/core';

@Pipe({ name: 'getVideoLength' })
export class GetVideoLengthPipe {
  transform(time: number): any {
    return new Date(time * 1000).toISOString().slice(11, 19);
  };
}
