import { Component } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-loader';

  constructor(private http: HttpClient,
    private LoaderService:LoaderService) { }

  callApi() {
    this.LoaderService.isLoading.next(true);
    const req = this.http.get('http://localhost:8080/getDetails')
      .subscribe(data => {
        console.log(data);
     
      });

      
  }
}
