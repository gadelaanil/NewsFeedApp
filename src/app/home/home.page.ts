import { Component } from '@angular/core';
import {Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  NewsInfo:any;
  spinner=false;
  constructor(private route: Router, private http:HttpClient) {

  }
ngOnInit(){
    this.http.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b72343f699134d00acb3e900b9c3768e").pipe(map(data => {return data})).subscribe(result => {
        this.spinner=true; 
        this.NewsInfo=result['articles'];
   
      });
}
viewInfo(data) {
    let navigationExtras = {
        queryParams: {
          special: JSON.stringify(data)
        }
      };
    this.route.navigate(['view'], navigationExtras);
}
}
