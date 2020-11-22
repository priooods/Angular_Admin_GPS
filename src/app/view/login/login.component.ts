import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/service/socket/socket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  datass: any;
  constructor(private coonn: SocketService) { }

  ngOnInit(): void {
  }

}
