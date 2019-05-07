import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id:number;
  post: Post;

  constructor(private route: ActivatedRoute, private postService: PostService) {
    this.route.params
    .subscribe( params => {
                  this.id = params.id;
                })
   }

  ngOnInit() {
    this.getPost(this.id);
  }

  getPost(i){
    this.post = this.postService.getPost(i);
  }

}
