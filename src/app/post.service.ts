import { Injectable } from '@angular/core';
import { Post } from './post';
import { post } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[]=[
    new Post('La belle et la bete','Ceci est un Walt Disney', 'La tres longue description qui apparait ici','walt Disney','https://media.cultura.com/media/catalog/product/cache/1/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/l/a/la-belle-et-la-bete-0094635321920_0.jpg?t=1509505809', new Date(1983,3,10),0),
    new Post('Tarzan','Ceci est une histoire de la jungle', 'La tres longue description qui apparait ici','walt Disney','https://www.telerama.fr/sites/tr_master/files/1ce67795-ca2d-4d2f-9225-131a22137ea8_2.jpg',new Date(1978,12,30),0),
    new Post('Le roi lion','Ceci est une histoire de la vie','La tres longue description qui apparait ici', 'walt Disney','http://cdn.franceloisirs.com/28382-199002-thickbox/le-roi-lion-dvd.jpg',new Date(1990,11,23),0),
    new Post('La reine des neiges','Liberee Delivree', 'La tres longue description qui apparait ici','walt Disney','http://www.musicalavenue.fr/wp-content/uploads/la-reine-des-neiges-OK.jpg',new Date(2010,12,1),0)
  ];
  connection: boolean = true;
  constructor() { }

  // Get posts
  getPosts() {
    return this.posts;
  }

  // get post by indice
  getPost(i) {
    return this.posts[i];
  }

  // add like
  addLike(i) {
    this.posts[i].like += 1;
  }

  // dislike
  disLike(i) {
    this.posts[i].like -= 1;
  }

  // Add a post
  addPost(post) {
    this.posts.push(post);
  }

  // Get connection
  getConnection() {
    return this.connection;
  }

}
