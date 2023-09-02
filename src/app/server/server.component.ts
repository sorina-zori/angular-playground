import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverId: number = 6;
  serverStatus: string = 'on fire';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor = () => {
    return this.serverStatus === 'online' ? '#2a9d8f' : '#e76f51';
  };
}
