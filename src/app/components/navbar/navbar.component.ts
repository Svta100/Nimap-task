import { Component, OnInit,HostListener, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private titleService:Title) { }

  ngOnInit(): void {
  }
  header_variable=false;
  @HostListener("document:scroll")
  scrollfunction(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      this.header_variable=true;
      
     
    }
    else{
      this.header_variable=false;
    }
  }
  setPageTitle(title:string){
    this.titleService.setTitle(title)
  }

}
