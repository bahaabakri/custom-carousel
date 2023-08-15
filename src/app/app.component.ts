import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CarouselItemComponent } from './component/carousel-item/carousel-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChildren('item') items ?:QueryList<ElementRef>
  lastElement:ElementRef | undefined
  firstElement:ElementRef | undefined
  title = 'custom-carousel';
  offset:number = 0

  ngAfterViewInit(): void {
    console.log(this.items?.toArray());
    this.lastElement = this.items?.toArray()[11]
    this.firstElement = this.items?.toArray()[0]
  }
  onClickRight(items:HTMLDivElement) {
    if (this.lastElement)
    this.offset -= 500; 
    items.style.translate = `${this.offset}px`
  }

  onClickLeft(items:HTMLDivElement) {
    this.offset += 500; 
    items.style.translate = `${this.offset}px`
  }
}
