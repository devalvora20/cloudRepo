import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  template: `<h2>This is the about page :{{developer}}</h2>`
})
export class AboutComponent implements OnInit {
  developer: any;
  a:any;
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.developer = this.route.snapshot.paramMap.get('developer');
  }
}