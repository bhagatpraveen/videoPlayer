import { TestBed, inject } from '@angular/core/testing';

import { VideolistService } from './videolist.service';

describe('VideolistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideolistService]
    });
  });

  it('should be created', inject([VideolistService], (service: VideolistService) => {
    expect(service).toBeTruthy();
  }));
});
