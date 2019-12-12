import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { HttpClientService } from '../helpers/http-client.service';
import { ImgurImage } from '../models/imgur-image.model';

@Injectable()
export class ImgurService {

  private readonly API_URL = 'https://api.imgur.com/3/gallery/search/';
  private readonly CLIENT_ID = '1ceddedc03a5d71';

  constructor(
    private httpClient: HttpClientService,
  ) { }


  public getImages = (query: string): Observable<ImgurImage[]> => {
    const headers = new HttpHeaders({Authorization: `Client-ID ${this.CLIENT_ID}`});
    // headers.set('Authorization', this.CLIENT_ID);
    return this.httpClient.get(`${this.API_URL}?q=${query}`, headers)
        .pipe(
          map(res => res.data),
          map(res => this.extractImages(res))
        );
  }

  private extractImages = (array: any[]) => {
    return array.reduce((acc, cur) => {
      if (cur.images_count > 0) {
        cur.images.forEach(image => image.type.indexOf('image') > -1 ? acc.push(new ImgurImage(image)) : null);
      }
      return acc;
    }, []);
  }
}
