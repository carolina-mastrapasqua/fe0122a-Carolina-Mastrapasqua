import { Component, OnInit } from '@angular/core';
import { getPosts } from '../posts.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss'],
})
export class ActivePostsComponent implements OnInit {
  constructor() {
    getPosts().then((posts) => {
      posts.forEach(function (post) {
        if (post.active) {
          let li = document.createElement('li');
          let listaActive = document.getElementById('lista-active');
          li.innerHTML = post.title + '<br>' + post.body;
          listaActive!.append(li);
        }
      });
    });
  }

  ngOnInit(): void {}
}
