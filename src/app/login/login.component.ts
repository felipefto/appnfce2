import { Component, OnInit } from '@angular/core';

import { ElectronService } from 'ngx-electron';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent implements OnInit {

  electronService: ElectronService;

  constructor(private _electronService: ElectronService, private router:Router) { 
    this.electronService = _electronService;
  }

  ngOnInit() {
    
  }
  loginInit(){    
    
    
    this.electronService.ipcRenderer.send('createWindowMain', this.electronService.remote.getCurrentWindow().id)
    

  }


}
