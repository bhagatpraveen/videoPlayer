import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { VideolistService } from '../common/service/videolist.service'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {UpperCasePipe} from '../common/pipes/uppercase.pipe'


@Component({
  selector: 'app-listvideo',
  templateUrl: './listvideo.component.html',
  styleUrls: ['./listvideo.component.css']
})
export class ListvideoComponent implements OnInit {

  constructor(private listService: VideolistService, private sanitizer: DomSanitizer) { }
  movieArray: any
  videoSrc: SafeResourceUrl;
  ngOnInit() {
    this.getListData();
  }

  public getListData() {
    this.listService.getData().subscribe(resp => {
      this.movieArray = resp;
      var src = this.movieArray[0].trailer;
      this.videoSrc = this.sanitizer.bypassSecurityTrustResourceUrl(src);

      //console.log(this.videoSrc);

    })
  }

  public playVideo(src) {
    this.videoSrc = this.sanitizer.bypassSecurityTrustResourceUrl(src);
  }

}


