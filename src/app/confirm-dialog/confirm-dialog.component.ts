import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {

  constructor(public diagloRef: MatDialogRef<ConfirmDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private electronService: ElectronService) { }

  cancel(){
    this.diagloRef.close();
  }
  sair(){
    this.diagloRef.close();
    this.electronService.ipcRenderer.send('closeApp', this.electronService.remote.getCurrentWindow().id)
    

  }

}
