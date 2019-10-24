import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.scss']
})
export class NavbarComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  githubNavigation() {
    console.log("Hello");
    // this.router.navigateByUrl('https://github.com/quantumcognition/GraphicToolsDataset');
 }

}
