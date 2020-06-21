import { Component, OnInit } from '@angular/core';

import { AppComponent } from '@shared/app/app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private appComponent: AppComponent) { }

  ngOnInit(): void {
  }

  toggleSidenav() {
    this.appComponent.toogle();
  }
}
