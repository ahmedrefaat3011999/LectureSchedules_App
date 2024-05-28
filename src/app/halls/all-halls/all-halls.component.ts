import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-all-halls',
  templateUrl: './all-halls.component.html',
  styleUrls: ['./all-halls.component.scss']
})
export class AllHallsComponent implements OnInit {
halls?: any[] = [];
  constructor( private httpService:HttpService ) { }

  ngOnInit(): void {
    this.getAllHalls()
  }

  getAllHalls(){
    this.httpService.GET('halls').subscribe((response)=>{
      this.halls = response
      console.log(this.halls)
    })
  }

  deleteHall(id:any){
    this.httpService.DELETE(`halls/${id}`).subscribe((response)=>{
      console.log(response)
      this.halls=this.halls.filter((hall) => hall.id !== id)
    });
  }
}
