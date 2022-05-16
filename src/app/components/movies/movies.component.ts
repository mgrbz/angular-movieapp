import { Component } from "@angular/core";
import { AlertifyService } from "src/app/services/alertify.service";



@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"],
  providers: []
})
export class MoviesComponent{

  constructor(private alertifyService: AlertifyService){}

  ngOnInit(){

  }

  addToList($event: any){
    if($event?.target.classList.contains('btn-primary')){
      $event.target.innerText = 'Listeden Çıkar';
      $event.target.classList.remove('btn-primary');
      $event.target.classList.add('btn-danger');
      this.alertifyService.success('Listeye Eklendi');
    } else if ($event.target.classList.contains('btn-danger')){

      $event.target.innerText = 'Listeye Ekle';
      $event.target.classList.remove('btn-danger');
      $event.target.classList.add('btn-primary');
      this.alertifyService.warning('Listeden Çıkarılı');

    }
  }

}






