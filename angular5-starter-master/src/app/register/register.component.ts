import { PostsService } from './../services/posts.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  posts : any[];

  constructor(public postsService : PostsService){
    this.postsService.getPosts()
    .subscribe(res => {
      this.posts = res;
      console.log(this.posts);
    });
  }
  

}
