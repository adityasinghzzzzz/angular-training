import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  combineLatest,
  filter,
  forkJoin,
  map,
  Observable,
  Subject,
  Subscription,
  debounceTime,
  switchMap,
} from 'rxjs';
import { MockDataService } from './mock-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  searchTermByCharacters = new Subject<string>();
  charactersResults$!: Observable<any>;
  planetAndCharactersResults$!: Observable<any>;
  isLoading: boolean = false;
  subscriptions: Subscription[] = [];

  constructor(private mockDataService: MockDataService) {}

  ngOnInit(): void {
    this.initLoadingState();
    this.initCharacterEvents();
  }

  changeCharactersInput(element: any): void {
    const inputValue: string = element.target.value;
    this.searchTermByCharacters.next(inputValue);
  }

  initCharacterEvents(): void {
    this.charactersResults$ = this.searchTermByCharacters.pipe(
      debounceTime(300),
      filter((value: string) => value.length >= 3),
      switchMap((searchTerm: string) => this.mockDataService.getCharacters(searchTerm))
    );
  }

  loadCharactersAndPlanet(): void {
    this.planetAndCharactersResults$ = forkJoin({
      characters: this.mockDataService.getCharacters(''),
      planets: this.mockDataService.getPlatents(),
    }).pipe(
      map(({ characters, planets }) => [...characters, ...planets])
    );
  }

  initLoadingState(): void {
    const charactersLoading$ = this.mockDataService.getCharactersLoader();
    const planetsLoading$ = this.mockDataService.getPlanetLoader();

    combineLatest([charactersLoading$, planetsLoading$]).subscribe(([charactersLoading, planetsLoading]) => {
      this.isLoading = this.areAllValuesTrue([charactersLoading, planetsLoading]);
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  areAllValuesTrue(elements: boolean[]): boolean {
    return elements.every((el) => el);
  }
}
