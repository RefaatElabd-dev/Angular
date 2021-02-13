import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../module/blog';
import { Register } from '../module/register';
import { AuthService } from '../service/auth.service';
import { BlogService } from '../service/blog.service';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: Register = new Register("", "", "", "", "");
  blogs: Blog[];
  newBlog: Blog = new Blog("", "", [], "")
  eBlog: Blog = new Blog("", "", [])
  logout(){
    this.auth.logout()
  }
  getdata(title, tags, body) {
    this.eBlog = new Blog(title, body, tags)
  }
  post() {
    this.serviceblog.setMyBlog(this.newBlog).subscribe(
      c => {
        console.log(c)
      }
    )
    this.newBlog = new Blog("", "", [], "");
  }
  editBlog(id) {
    this.serviceblog.editMyBlog(id, this.eBlog).subscribe(
      a => {

        console.log(a);
      }
    )
  }
  deleteBlog(id) {
    this.serviceblog.delMyBlog(id).subscribe(
      a => {
        console.log(a)
        console.log("deleted")
      }
    )
  } 
  constructor(public serviceblog:BlogService,public auth:AuthService, public userService: RegisterService, public router: Router) { }
    
  ngOnInit(): void {
    this.serviceblog.getFollowingBlog().subscribe(
      a=>{
        this.blogs=a.reverse();
      }
    )
  }

}
