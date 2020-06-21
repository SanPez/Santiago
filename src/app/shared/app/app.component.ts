import { Component, ViewChild } from '@angular/core';

import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      "Logo",
      this.domSanitizer.bypassSecurityTrustResourceUrl("./../assets/Logo.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "Fondo",
      this.domSanitizer.bypassSecurityTrustResourceUrl("./../assets/Fondo.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "Angular",
      this.domSanitizer.bypassSecurityTrustResourceUrl("./../assets/Angular.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "Node",
      this.domSanitizer.bypassSecurityTrustResourceUrl("./../assets/Node.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "Github",
      this.domSanitizer.bypassSecurityTrustResourceUrl("./../assets/Github.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "Vscode",
      this.domSanitizer.bypassSecurityTrustResourceUrl("./../assets/Vscode.svg")
    );
  }

  @ViewChild("sidenav") sidenav: MatSidenav

  toogle() {
    this.sidenav.toggle();
  }
}
