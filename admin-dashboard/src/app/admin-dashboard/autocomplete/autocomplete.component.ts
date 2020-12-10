import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { combineLatest, forkJoin, Observable } from 'rxjs';
import { startWith, map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  form: FormGroup
  a1: A1[] = [
    {
      id: 1,
      name: "a"
    },
    {
      id: 2,
      name: "b"
    },
    {
      id: 3,
      name: "c"
    }
  ];
  options: Option[];
  ends = [];
  end = [
    {
      id: 4,
      end: ["a", "b", "c"]
    },
    {
      id: 5,
      end: ["d", "e", "f"]
    },
    {
      id: 6,
      end: ["g", "h", "i"]
    }
  ]
  group: Group[] = [
    {
      id: 1,
      option: [
        {
          id: 4,
          course: "A"
        },
        {
          id: 5,
          course: "AA"
        },
        {
          id: 6,
          course: "AAA"
        }
      ]
    },
    {
      id: 2,
      option: [
        {
          id: 4,
          course: "B"
        },
        {
          id: 5,
          course: "BB"
        },
        {
          id: 6,
          course: "BBB"
        }
      ]
    },
    {
      id: 3,
      option: [
        {
          id: 4,
          course: "C"
        },
        {
          id: 5,
          course: "CC"
        },
        {
          id: 6,
          course: "CCC"
        }
      ]
    }
  ]
  select1: Observable<any>;
  select2: Observable<any>;
  concatTotal: Observable<any>;
  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.form = this._formBuilder.group({
      a: [''],
      option: [''],
      end: ['']
    });


    this.select1 = this.form.get('a').valueChanges.pipe(
      startWith(''),
      debounceTime(500),
      map(value => { 
        this.options = []
        this.ends = []
        this._filterA(value) // call api
      })
    )
    this.select2 = this.form.get('option').valueChanges.pipe(
      startWith(''),
      debounceTime(500),
      map(val => 
       {
        this._filterB(val) // call api
        console.log(val)
       }
      )
    )

    this.select1.subscribe(res => {res})
    this.select2.subscribe(res => res)

  }



  private _filterA(value: any) {

    if (value) {
      this.group.forEach(item => {  
        if (item.id == value) {
          this.options = item.option
        }
      })

    }

  }
  private _filterB(value: any) {

    if (value) {
      this.end.forEach(item => {
        if (item.id == value) {
          this.ends = item.end
        }
      })

    }

  }

}
export class A1 {
  id: number;
  name: string;
}
export class Group {
  id: number;
  option: Option[];
}
export class Option {
  id: number;
  course: string
}
