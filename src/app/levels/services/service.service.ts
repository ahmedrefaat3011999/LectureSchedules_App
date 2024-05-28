import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpService: HttpService) { }

  AddLevelsFunction(model): Observable<any> {
    return this.httpService.POST('levels', model);
  }
 
}