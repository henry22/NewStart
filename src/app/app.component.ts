import { Component } from '@angular/core';
import { MessageService } from './message.service';
import { Observable } from 'rxjs/Observable';
import { HeroCounterInterface } from './hero-counter.interface'

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Tour of Heroes";

  counter$: Observable<number> = this.counterService.counter$;

  constructor(
    public messageService: MessageService,
    private counterService: HeroCounterInterface
  ) {}
}
