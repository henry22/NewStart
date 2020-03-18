import { Observable } from "rxjs/Observable";

export abstract class HeroCounterInterface {
    abstract counter$: Observable<number>;
}
