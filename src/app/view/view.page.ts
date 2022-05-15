import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
NewInformation:any;
  constructor(public route: ActivatedRoute) { }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.NewInformation = JSON.parse(params.special);
      //  console.log( this.NewInformation);
      }
    });
  }

}
