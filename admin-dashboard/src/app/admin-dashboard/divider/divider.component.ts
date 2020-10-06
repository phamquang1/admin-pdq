import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';


@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.css']
})
export class DividerComponent implements OnInit {
  private notifier: NotifierService;
  // google maps zoom level
  zoom: number = 15;
  constructor(
    notifier: NotifierService
  ) { this.notifier = notifier}

  ngOnInit(): void {
  }
   // initial center position for the map
   lat: number = 11.333203;
   lng: number = 106.120042;
 
   clickedMarker(event) {
    //  console.log(`clicked the marker: ${label || index}`)
    this.notifier.notify('success',`latitude : ${event.latitude}, longitude: ${event.longitude}`)
    console.log(event)
   }
   
   mapClick($event : MouseEvent) {
     console.log('event',$event)
    //  this.markers.push({
    //    lat: $event.coords.lat,
    //    lng: $event.coords.lng,
    //    name: "Gnauq" + Math.random(),
    //    draggable: true
    //  });
   }
   
   markerDragEnd(m: marker, $event: MouseEvent) {
     console.log('dragEnd', m, $event);
   }

  markers: marker[] = [
	  {
		  lat: 11.337794,
      lng: 106.116862,
      name: 'A',
		  label: 'Gaming House',
		  draggable: true
	  },
	  {
		  lat: 11.333055,
      lng: 106.12921,
      name:'B',
		  label: 'Cafe Meoz',
		  draggable: false
	  },
	  {
		  lat: 11.337086,
      lng: 106.122662,
      name: 'C',
		  label: 'Gnauq',
		  draggable: true
	  }
  ]

}
// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
  label?: string;
  name: string
	draggable: boolean;
}
