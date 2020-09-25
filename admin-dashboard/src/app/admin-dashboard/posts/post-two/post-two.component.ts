import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-post-two',
  templateUrl: './post-two.component.html',
  styleUrls: ['./post-two.component.css']
})
export class PostTwoComponent implements OnInit {
  @ViewChild('dynamicContent',{static :true,read : ViewContainerRef}) containerRef : ViewContainerRef
  constructor(
    private cfr : ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    console.log("2");
    
  }
  async addDynamic1(){
    this.containerRef.clear();
    const {DynamicComponent} = await import('../../../shared/dynamic/dynamic.component')
    const componentFactory = this.cfr.resolveComponentFactory(DynamicComponent);
    const componentRef = this.containerRef.createComponent(componentFactory);
    // componentRef.instance.title = "INPUT DATA 1";
  }
  async addDynamic2(){
    this.containerRef.clear();
    const {DynamicDemoComponent} = await import('../../../shared/dynamic-demo/dynamic-demo.component')
    const componentFactory = this.cfr.resolveComponentFactory(DynamicDemoComponent);
    const componentRef = this.containerRef.createComponent(componentFactory)
    // componentRef.instance.title = "INPUT DATA 2";
  }

}
