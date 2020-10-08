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
  // @ViewChild('infoWindow') infoWindow: MapInfoWindow;
  // @ViewChild(MapInfoWindow, { static: false }) mapInfoWindow: MapInfoWindow;
  @ViewChildren(MapInfoWindow) infoWindowsView: QueryList<MapInfoWindow>;
  center: google.maps.LatLngLiteral = { lat: 11.328678796553339, lng: 106.13212824340822 };
  zoom = 15;
  location: any;
  map:any
  options: google.maps.MapOptions = {
    // mapTypeId: 'hybrid',
    // zoomControl: true,
    // scrollwheel: false,
    // disableDoubleClickZoom: false,
    // maxZoom: 15,
    // minZoom: 8,
  }

  markerOptions: google.maps.MarkerOptions = { draggable: false };
  _myMakerPosition: google.maps.MarkerOptions = {
    position: {
      lat: 11.328678796553339,
      lng: 106.13212824340822
    },
    label: 'Gnauq',
    title: 'My house',
    animation: google.maps.Animation.BOUNCE,
    icon: {
      url: './../../../assets/img/output-onlinepngtools.png',
      size: {
        width: 50,
        height: 50,

      } as google.maps.Size
    },
    draggable: false,

  }
  //
  markerPositions : MakerDto[] = [
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
      
      circle : {
        center: {
          lat: 11.333205, lng: 106.120042
        },
        draggable: true,
        radius: 300,
        editable: true,
        fillColor: 'red',
        fillOpacity: 0.2,
      } as google.maps.CircleOptions
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
      circle : {
        center: {
          lat: 11.328868877994891, lng: 106.12583557147217
        },
        draggable: true,
        radius: 300,
        editable: true,
        fillColor: 'red',
        fillOpacity: 0.2,
      } as google.maps.CircleOptions
    },
    {
    
      position: {
        lat: 11.337086,
        lng: 106.122662,
      },
      label: {
        color: 'C'
      },
      title: 'India Cafe Location ',
      options: {
        animation: google.maps.Animation.DROP,
        draggable: true
      },
      circle : {
        center: {
          lat: 11.336569263017358, lng: 106.13480487841797
        },
        draggable: true,
        radius: 300,
        editable: true,
        fillColor: 'red',
        fillOpacity: 0.2,
      } as google.maps.CircleOptions
    }
  ];


  //
  circleCenter: google.maps.CircleOptions = {
    center: {
      lat: 11.333205, lng: 106.120042
    },
    draggable: true,
    radius: 300,
    editable: true,
    fillColor: 'red',
    fillOpacity: 0.1,
  };
  
  constructor(
    notifier: NotifierService
  ) {
    this.notifier = notifier;
    this.map = document.getElementById('map')
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
    // console.log("onMouseOver", event);
  }
  onMouseDown(event) {

    // console.log("onMouseDown", event);
  }
  mapDrap(event: MouseEvent) {
    // console.log('mapDrag', event)
  }
  onDragStart(event) {
    this.location = {
      lat: event.latLng.toJSON().lat,
      lng: event.latLng.toJSON().lng
    }
    return location;
  }
  onDragEnd(event) {
    this.notifier.notify('info', `Drag from Lat :${this.location.lat} Lng : ${this.location.lng}  to Lat :${event.latLng.toJSON().lat} Lng : ${event.latLng.toJSON().lng}`)
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
    this.notifier.notify('warning', `latitude : ${event.latLng.toJSON().lat} , longitude : ${event.latLng.toJSON().lng} `)
  }
  // openInfoWindowMyposition(marker: MapMarker) {
  //   this.infoWindow.open(marker);
  // }
  markerView(marker:MakerDto){
    this.zoom = 15;
    this.center = {lat : marker.position.lat , lng: marker.position.lng};
    this.zoom = this.zoom + 3;
  }
  currentPosition(){
    this.center = { lat: 11.328678796553339, lng: 106.13212824340822 };
    this.zoom = 15;
  }
}

export class MakerDto {
  position: Position
  label: any
  title: string
  options: any
  circle :any

}
export class Position {
  lat: number
  lng: number
}