import { Component } from '@angular/core';

@Component({
  // selector: 'app-servers',
  // selector: '[app-servers]',
  // selecting by id won't work
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {}
