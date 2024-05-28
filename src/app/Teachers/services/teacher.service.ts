import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/shared/http.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private httpServ:HttpService) { }

  AddTeachers(model:any):Observable<any>{
    return this.httpServ.POST("teachers", model);
  }


 
}
