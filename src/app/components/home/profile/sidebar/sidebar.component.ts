import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public show: number = 1;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  routing(url: string, index: number){
    this.show = index;
    this.router.navigate([url]);
  }
}
