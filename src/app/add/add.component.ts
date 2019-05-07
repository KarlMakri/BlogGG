import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private postService: PostService, private router : Router) { }

  ngOnInit() {
  }

  OnSubmit(form) {
    console.log(form.form.value);
    this.postService.addPost(form.form.value);
    this.router.navigate(['list']);
  }

}
