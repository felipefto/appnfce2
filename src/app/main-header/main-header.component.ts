import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';



@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  alert: string;
  message: string;

  constructor(private _electronService: ElectronService) { }

  ngOnInit() {
  }
  signout(): void {
    /*
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '250px';
    dialogConfig.role = 'alertdialog';
    dialogConfig.data = {
        id: 1,
        title: 'Alerta',
        message: 'Deseja sair do sistema?',
        color: 'warm'
    };

    let dialogRef = this.dialog.open(ConfirmDialogComponent, dialogConfig)*/
    this._electronService.ipcRenderer.send('showDialogCloseApp', this._electronService.remote.getCurrentWindow().id);
  }
  changeUser(): void {
    this._electronService.ipcRenderer.send('showDialogChangeUser', this._electronService.remote.getCurrentWindow().id);
  }
}
