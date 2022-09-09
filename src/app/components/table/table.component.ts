import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  posts: any;

  constructor(private service: PostService) { }

  ngOnInit(): void {
    
   this.service.getPosts().subscribe(res => this.posts = res);
   console.log(this.posts)
  }

}
