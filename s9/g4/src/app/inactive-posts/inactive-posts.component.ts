import { Component, OnInit } from '@angular/core';
import { getPosts } from '../posts.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss'],
})
export class InactivePostsComponent implements OnInit {
  constructor() {
    getPosts().then((posts) => {
      posts.forEach(function (post) {
        if (post.active == false) {
          let li = document.createElement('li');
          let listaActive = document.getElementById('lista-inactive');
          li.innerHTML = post.title + '<br>' + post.body;
          listaActive!.append(li);
        }
      });
    });
  }

  ngOnInit(): void {}
}
