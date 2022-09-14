import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-nav',
  templateUrl: './crud-nav.component.html',
  styleUrls: ['./crud-nav.component.scss']
})
export class CrudNavComponent implements OnInit {
  @Input() title?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
