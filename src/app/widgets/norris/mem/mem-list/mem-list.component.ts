import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Post } from "../interface/post.model";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Component({
  selector: "app-mem-list",
  templateUrl: "./mem-list.component.html",
  styleUrls: ["./mem-list.component.scss"],
})
export class MemListComponent implements OnInit {
  photoUrl: string;
  public posts: any[] = [];
  dataUrl: string;

  requestPosts() {
    this.http
      .get<Post>("https://api.chucknorris.io/jokes/random")
      .subscribe((results) => {
        this.posts.push(results);
        this.dataUrl = results.value;
      });
  }

  text =
    "Some quick example text to build on the card title and make up the bulk of the card's content.";
  today: number = Date.now();
  pi: number = 3.14159265359;

  ngOnInit(): void {
    this.requestPosts();
  }
  constructor(private http: HttpClient) {}

  exit() {
    location.reload();
  }

  onclick() {
    this.requestPosts();
  }
}



