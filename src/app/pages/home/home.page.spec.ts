import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { ImgurService } from 'src/app/services/imgur.service';
import { of } from 'rxjs';


const ImgurServiceMock = {
  getImages: () => of([
    {"id":"Xl1evvU","title":null,"description":null,"datetime":1576189873,"type":"image/jpeg","animated":false,"width":480,"height":474,"size":127472,"views":61,"bandwidth":7775792,"vote":null,"favorite":false,"is_ad":false,"in_most_viral":false,"has_sound":false,"tags":[],"ad_type":0,"ad_url":"","edited":"0","in_gallery":false,"link":"https://i.imgur.com/Xl1evvU.jpg","comment_count":null,"favorite_count":null,"ups":null,"downs":null,"points":null,"score":null},
    {"id":"Xl1evvU","title":null,"description":null,"datetime":1576189873,"type":"image/jpeg","animated":false,"width":480,"height":474,"size":127472,"views":61,"bandwidth":7775792,"vote":null,"favorite":false,"is_ad":false,"in_most_viral":false,"has_sound":false,"tags":[],"ad_type":0,"ad_url":"","edited":"0","in_gallery":false,"link":"https://i.imgur.com/Xl1evvU.jpg","comment_count":null,"favorite_count":null,"ups":null,"downs":null,"points":null,"score":null}
    ]
  )
};

fdescribe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot()],
      providers: [{provide: ImgurService, useValue: ImgurServiceMock}]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set view with the value from the event', () => {
    component.segmentChanged({detail: { value: 'grid'}});
    expect(component.view).toBe('grid');
  });

});
