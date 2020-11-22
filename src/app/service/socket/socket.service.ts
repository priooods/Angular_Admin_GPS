import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private socket: Socket) {
     socket.connect();
   }

  getPosisiUser(){
    return this.socket.fromEvent('cord');
  }

  // Connect(){
  //   this.socket.ioSocket.io.uri = "http://localhost:8080"
  //   this.socket.connect();
  // }
}
