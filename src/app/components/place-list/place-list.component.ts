import { Component, OnInit } from '@angular/core';
import Place from 'src/app/interfaces/place.interface';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit {

  places: Place[];

  constructor(
    private placesService: PlacesService
  ) {
    this.places = [{
      name: 'Prueba de sitio',
      description: 'Esto es una prueba',
      latitude: 40,
      longitude: -3,
      image: 'https://media.timeout.com/images/105718969/750/422/image.jpg'
    }];
  }

  ngOnInit(): void {
    this.placesService.getPlaces().subscribe(places => {
      this.places = places;
    })
  }

  async onClickDelete(place: Place) {
    const response = await this.placesService.deletePlace(place);
    console.log(response);
  }

}
