const fileUrl = require('file-url');
import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../../providers/electron.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  electronService: ElectronService;
  public wallPaperSrc: string;

  constructor(public electronService2: ElectronService) { 
    this.electronService = electronService2;
  }

  ngOnInit() {
  }

  public load() {
    this.electronService.wallpaper.get().then((o)=>this.wallPaperSrc = fileUrl(o));
  }
}
