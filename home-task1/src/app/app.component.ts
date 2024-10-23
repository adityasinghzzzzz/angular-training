import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  combineLatest,
  filter,
  forkJoin,
  map,
  Observable,
  Subject,
  Subscription,
  switchMap,
  debounceTime,
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
      filter((value) => value.length >= 3),  
      debounceTime(300),  
      switchMap((searchTerm) => this.mockDataService.getCharacters(searchTerm))  // Make API call
    );
  }
 
 
  loadCharactersAndPlanet(): void {
    this.planetAndCharactersResults$ = forkJoin([
      this.mockDataService.getCharacters(),
      this.mockDataService.getPlatents()
    ]).pipe(
      map(([characters, planets]) => [...characters, ...planets])  
    );
  }
 
 
  initLoadingState(): void {
    const charactersLoader$ = this.mockDataService.getCharactersLoader();
    const planetsLoader$ = this.mockDataService.getPlanetLoader();
 
    const loadingSubscription = combineLatest([charactersLoader$, planetsLoader$]).subscribe(
      (loaderStates) => {
        this.isLoading = this.areAllValuesTrue(loaderStates);  
      }
    );
 
    this.subscriptions.push(loadingSubscription);
  }
 
 
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
 
 
  areAllValuesTrue(elements: boolean[]): boolean {
    return elements.every((el) => el);
  }
}
 
