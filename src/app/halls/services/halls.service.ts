import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/shared/http.service';

@Injectable({
  providedIn: 'root'
})
export class HallsService {

  constructor(private http:HttpService) { }

  AddHallsFunction(model): Observable<any> {
    return this.http.POST('halls', model);
  }
 
}
