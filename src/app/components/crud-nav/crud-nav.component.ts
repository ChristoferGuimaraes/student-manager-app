import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-nav',
  templateUrl: './crud-nav.component.html',
  styleUrls: ['./crud-nav.component.scss']
})
export class CrudNavComponent implements OnInit {

  titles: String[] = ["Students", "Courses"];

  constructor() { }

  ngOnInit(): void {
  }

}
