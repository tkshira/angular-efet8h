import { Component, OnInit } from '@angular/core';
import { kouzis } from '../../kouzi';

@Component({
  selector: 'app-kouzi-list',
  templateUrl: './kouzi-list.component.html',
  styleUrls: ['./kouzi-list.component.css'],
})
export class KouziListComponent implements OnInit {
  kouzis = kouzis;
  pageCount = Math.ceil(kouzis.length / 2);
  constructor() {}

  ngOnInit() {}
}
