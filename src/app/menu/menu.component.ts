import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  array  = [
    {name: 'login', path: 'login'},
    {name: 'about', path: 'about'},
    {name: 'contact', path: 'contact'},
  ];


  constructor(private router: Router) { }

  onNavigate(item) {
    this.router.navigateByUrl(item.path);
  }

  ngOnInit() {
  }

}

