import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";

@Injectable()
export class LoaderService implements HttpInterceptor{
  
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
        this.isLoading.next(true);
        return next.handle(req).pipe(
            finalize(() => {
          
             
                this.isLoading.next(false);
                
            })
        );
    }
    isLoading = new Subject<boolean>();

}
