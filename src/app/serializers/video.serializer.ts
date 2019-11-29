import { Serializer } from './serializer';
import { ItemModel } from '../models/item.model';

export class VideoSerializer implements Serializer<ItemModel> {
  fromJson(json: any): ItemModel {
    const video = new ItemModel();
    video.videoId = json.id.videoId;
    video.thumbnail = json.snippet.thumbnails.default.url;
    video.title = json.snippet.title;
    video.publishedAt = json.snippet.publishedAt;
    video.description = json.snippet.description;
    return video;
  }
}
