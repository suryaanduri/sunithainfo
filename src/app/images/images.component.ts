import { Component, OnInit ,ChangeDetectorRef, Output, EventEmitter} from '@angular/core';
import { ImageService } from '../services/image.service';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';


@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  isCollapsed : boolean;
  throttle = 300;
  scrollDistance = 2;
  scrollUpDistance = 2;
  page: number = 1;
  randomImage: any;
  private randomImgURL: String;
  isHeaderVisible: boolean = true;
  navbarForm: FormGroup;
  public images: Array<any>;
  
  like: boolean = false;
  comments: any[] = [];
  

  constructor(private imageService: ImageService, private sanitizer: DomSanitizer,private cdr: ChangeDetectorRef,iconRegistry: MatIconRegistry) { 
  
      
  };
  
  
  async ngOnInit() {
    
    this.navbarForm = new FormGroup({
      searchText: new FormControl()
    })
    
  }

  async onSearch(event, searchRequest: string) {
console.log(event,searchRequest)
    if (event.key === "Enter" || event.type === "click") {
      if (!this.isNullOrWhitespace(searchRequest)) {
        
        this.navbarForm.get('searchText').setValue(searchRequest)
        
        this.images = await this.imageService.searchImages(searchRequest);
        console.log("surya",this.images)
        

       
      }
    }
  }

  isNullOrWhitespace(searchRequest: any): boolean {
    return !searchRequest || !searchRequest.trim();
  }

  addComments = function(text,imgData) {
    console.log(imgData)
    var data = {
      comments: text,
      date: Date.now()
    }
    this.images.forEach(element => {
      if(imgData.id==element.id){
        element.current_user_collections.push(data)
      }
    });
    console.log(this.images)
  }

  liked = function() {
    this.like = !this.like;
  }

}
