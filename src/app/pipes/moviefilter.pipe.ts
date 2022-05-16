import { Pipe, PipeTransform } from "@angular/core";
import { IMovie } from "../types/movies";



@Pipe({
  name: 'movieFilter'
})
export class MovieFilterPipe implements PipeTransform {

  transform(value: IMovie[], filterText: string): IMovie[] | null {
    if(!value)
      return null;
    
      if(filterText){
        console.log('movie Filtered with Pipe')
        filterText = filterText.toLowerCase();
        return value.filter(movie => movie.title.toLowerCase().indexOf(filterText) !== -1 ||
                                    movie.description.toLowerCase().indexOf(filterText) !== -1);
      }

      return value;
  }



}


