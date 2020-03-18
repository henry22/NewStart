import { Component, OnInit } from "@angular/core";
import { MessageService } from './message.service';
import { Observable } from 'rxjs/Observable';
import { HeroCounterInterface } from './hero-counter.interface';
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Tour of Heroes";

  heroesTitle: String;
  dashboardTitle: String;

  constructor(
    public messageService: MessageService,
    private counterService: HeroCounterInterface,
    private http: Http
  ) {}

  counter$: Observable<number> = this.counterService.counter$;

  ngOnInit() {
    this.http
      .get("/assets/data/dashboard-link.json")
      .map(data => data.json())
      .subscribe(data => {
        this.heroesTitle = data.heroes;
        this.dashboardTitle = data.dashboard;
      });
  }
}