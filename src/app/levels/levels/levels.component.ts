import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.scss'],
})
export class LevelsComponent implements OnInit {
  levels: any[] = [];
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.getAllLevels();
  }

  getAllLevels() {
    this.httpService.GET('levels').subscribe((response) => {
      this.levels = response;
      console.log(this.levels);
    });
  }

 deleteLevel(id:any){
    this.httpService.DELETE(`levels/${id}`).subscribe((response)=>{
      console.log(response)
      this.levels=this.levels.filter((level) => level.id !== id)
    });
  }
}
