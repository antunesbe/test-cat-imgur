import { Component, OnInit, ViewChild } from '@angular/core';
import { ImgurService } from 'src/app/services/imgur.service';
import { ImgurImage } from 'src/app/models/imgur-image.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  images: ImgurImage[];
  view = 'grid';
  currentPage = 1;
  @ViewChild('slides', {static: false}) slides;

  constructor(
    private imgurService: ImgurService,
  ) {}


  ngOnInit(): void {
    this.imgurService.getImages('cats').subscribe((response: ImgurImage[]) => {
      this.images = response;
      console.log(JSON.stringify(this.images[0]));
    });
  }

  segmentChanged(event: any): void {
    this.view = event.detail.value;
  }

  slideChanged() {
    this.slides.getActiveIndex().then(index => {
      this.currentPage = index + 1;
    });
  }
}
