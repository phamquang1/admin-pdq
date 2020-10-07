import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  private notifier: NotifierService;
  // @ViewChild("mapMarker",{static: false}) public mapMarker: any;
  // @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow;
  // @ViewChild(MapInfoWindow, { static: false }) mapInfoWindow: MapInfoWindow;
  @ViewChildren(MapInfoWindow) infoWindowsView: QueryList<MapInfoWindow>;
  center: google.maps.LatLngLiteral = { lat: 11.333203, lng: 106.120042 };
  zoom = 15;
  circleCenter: google.maps.CircleOptions = {
    center: {
      lat: 11.333205, lng: 106.120042
    },
    draggable: true,
    radius: 300,
    editable:true,
    fillColor: 'red'
  };

  options: google.maps.MapOptions = {
    // mapTypeId: 'hybrid',
    // zoomControl: true,
    // scrollwheel: false,
    // disableDoubleClickZoom: false,
    // maxZoom: 15,
    // minZoom: 8,
  }
  location: any;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions = [
    {
      position: {
        lat: 11.337794,
        lng: 106.116862,
      },
      label: {
        color: 'A'
      },
      title: 'India Warning Location ',
      options: {
        animation: google.maps.Animation.DROP,
        draggable: true
      },
    },
    {
      position: {
        lat: 11.333055,
        lng: 106.12921,
      },
      label: {
        color: 'B'
      },
      title: 'India Safe Location ',
      options: {
        animation: google.maps.Animation.DROP,
        draggable: true
      },
    },
    {
      position: {
        lat: 11.337086,
        lng: 106.122662,
      },
      label: {
        color: 'C'
      },
      title: 'India Safe Location ',
      options: {
        animation: google.maps.Animation.DROP,
        draggable: true
      },
    }
  ];
  constructor(
    notifier: NotifierService
  ) {
    this.notifier = notifier
  }

  ngOnInit(): void {
  }


  addMarker(event) {
    console.log(event.latLng.toJSON())
    this.markerPositions.push(
      {
        position: event.latLng.toJSON(),
        label: {
          color: 'Q' + Math.floor(Math.random() * 100)
        },
        title: 'Gnauq' + Math.floor(Math.random() * 100),
        options: {
          animation: google.maps.Animation.DROP,
          draggable: true
        }
      } as MakerDto
    );
  }
  onMouseOver(event) {
    console.log("onMouseOver", event);
  }
  onMouseDown(event) {

    console.log("onMouseDown", event);
  }
  mapDrap(event: MouseEvent) {
    console.log('mapDrag', event)
  }
  onDragStart(event) {
    this.location = {
      lat: event.latLng.toJSON().lat,
      lng: event.latLng.toJSON().lng
    }
    return location;
  }
  onDragEnd(event) {
    this.notifier.notify('success', `Drag from Lat :${this.location.lat} Lng : ${this.location.lng}  to Lat :${event.latLng.toJSON().lat} Lng : ${event.latLng.toJSON().lng}`)
  }
  openInfoWindow(marker: MapMarker, windowIndex: number, event) {

    /// stores the current index in forEach
    let curIdx = 0;
    this.infoWindowsView.forEach((window: MapInfoWindow) => {
      if (windowIndex === curIdx) {
        window.open(marker);
        curIdx++;
      } else {
        curIdx++;
      }
    });
    this.notifier.notify('success', `latitude : ${event.latLng.toJSON().lat} , longitude : ${event.latLng.toJSON().lng} `)
  }


}

export class MakerDto {
  position: Position
  label: any
  title: string
  options: any

}
export class Position {
  lat: number
  lng: number
}