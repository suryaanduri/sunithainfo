import { Injectable } from '@angular/core';
import { Global } from '../providers/global';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  

  constructor(private global: Global,private http:HttpClient) { }

  searchImages(userInput: string, pageIndex:number = 1, elementsPerPage:number = 30): Promise<any> {
    
  return this.global.UNSPLASH_API.search.photos(userInput, pageIndex, elementsPerPage).then(response => response.json()).then(json => json.results);
    
  }

 

  
  
}
