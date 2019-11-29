import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemModel } from '../models/item.model';
import { first, map } from 'rxjs/operators';
import { VideoSerializer } from '../serializers/video.serializer';

@Injectable({
  providedIn: 'root'
})
export class EntityService {
  videoUrl = `https://www.youtube.com/watch?v=`;
  videoSerializer = new VideoSerializer();

  constructor(private httpClient: HttpClient) { }

  get(): Observable<ItemModel[]> {
    return this.httpClient
        // tslint:disable-next-line:max-line-length
        .get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk&maxResults=50&type=video&part=snippet&q=john')
        .pipe(map(data => this.convertData(data)));
  }
  getUrlById(id: string): string {
    return `${this.videoUrl}${id}`;
  }

  private convertData(data: any): any[] {
    return data.items.map(item => {
      return this.videoSerializer.fromJson(item);
    });
  }
}
