import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, Routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatabaseService } from '../app/service/connect/database.service';
import { SocketService } from '../app/service/socket/socket.service';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { GoogleMapsModule } from '@angular/google-maps'

const config: SocketIoConfig = { url: 'http://localhost:8080', options: { autoConnect: false } };

@NgModule({
  declarations: [
    AppComponent, Routing
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    GoogleMapsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [DatabaseService, SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
