import { Observable } from 'rxjs';
// import { combineLatest, fromEvent } from 'rxjs';
// import { ajax } from 'rxjs/ajax';
import { filter } from "rxjs/operators";

//Filter 
interface NewsItem {
  category: 'Business' | 'Sports';
  content: string;
}

const newsFeed$ = new Observable<NewsItem>(subscriber => {
  setTimeout(() => 
    subscriber.next({ category: 'Business', content: 'A' }), 1000);
  setTimeout(() => 
    subscriber.next({ category: 'Sports', content: 'B' }), 3000);
  setTimeout(() => 
    subscriber.next({ category: 'Business', content: 'C' }), 4000);
  setTimeout(() => 
    subscriber.next({ category: 'Sports', content: 'D' }), 6000);
  setTimeout(() => 
    subscriber.next({ category: 'Business', content: 'E' }), 7000);
});

const sportsNewsFeed$ = newsFeed$.pipe(
  filter(item => item.category === 'Sports')
);

newsFeed$.subscribe(
  item => console.log(item)
);

// //Combinelatest
// const temperatureInput = document.getElementById('temperature-input');
// const conversionDropdown = document.getElementById('conversion-dropdown');
// const resultText = document.getElementById('result-text');

// const temperatureInputEvent$ = fromEvent(temperatureInput, 'input');
// const conversionInputEvent$ = fromEvent(conversionDropdown, 'input');

// combineLatest([temperatureInputEvent$, conversionInputEvent$]).subscribe(
//   ([temperatureInputEvent, conversionInputEvent]) => {
//     const temperature = Number(temperatureInputEvent.target['value']);
//     const conversion = conversionInputEvent.target['value'];

//     let result: number;
//     if (conversion === 'f-to-c') {
//       result = ((temperature - 32) * 5) / 9;
//     } else if (conversion === 'c-to-f') {
//       result = (temperature * 9) / 5 + 32;
//     }

//     resultText.innerText = String(result);
//   }
// );

// //Error Scenario
// const a$ = new Observable(subscriber => {
//   setTimeout(() => {
//     subscriber.next('A');
//     subscriber.complete();
//   }, 5000);

//   return () => {
//     console.log('A teardown');
//   };
// });

// const b$ = new Observable(subscriber => {
//   setTimeout(() => {
//     subscriber.error('Failure!');
//   }, 3000);

//   return () => {
//     console.log('B teardown');
//   };
// });

// forkJoin([a$, b$]).subscribe({
//   next: value => console.log(value),
//   error: err => console.log('Error:', err)
// });

// //Forkjoin Multiple Http Requests
// const randomName$ = ajax('https://random-data-api.com/api/name/random_name');
// const randomNation$ = ajax('https://random-data-api.com/api/nation/random_nation');
// const randomFood$ = ajax('https://random-data-api.com/api/food/random_food');

// // randomName$.subscribe(ajaxResponse => console.log(ajaxResponse.response.first_name));
// // randomNation$.subscribe(ajaxResponse => console.log(ajaxResponse.response.capital));
// // randomFood$.subscribe(ajaxResponse => console.log(ajaxResponse.response.dish));

// forkJoin([randomName$, randomNation$, randomFood$]).subscribe(
//   ([nameAjax, nationAjax, foodAjax]) => console.log(`${nameAjax.response.first_name} is from ${nationAjax.response.capital} and likes to eat ${foodAjax.response.dish}.`)

// //Interval
// console.log('App started');

// const interval$ = new Observable<number>(subscriber => {
//   let counter = 0;

//   const intervalId = setInterval(() => {
//     console.log('Timeout!');
//     subscriber.next(counter++);
//   }, 1000);

//   return () => clearInterval(intervalId);
// });

// const subscription = interval$.subscribe({
//   next: value => console.log(value),
//   complete: () => console.log('Completed')
// });

// setTimeout(() => {
//   subscription.unsubscribe();
//   console.log('Unsubscribe');
// }, 5000);

// //Timer
// console.log('App started');

// const timer$ = new Observable<number>(subscriber => {
//   const timeoutId = setTimeout(() => {
//     console.log('Timeout!');
//     subscriber.next(0);
//     subscriber.complete();
//   }, 2000);

//   return () => clearTimeout(timeoutId);
// });

// const subscription = timer$.subscribe({
//   next: value => console.log(value),
//   complete: () => console.log('Completed')
// });

// setTimeout(() => {
//   subscription.unsubscribe();
//   console.log('Unsubscribe');
// }, 1000);

// //Fromevent
// const triggerButton = document.querySelector('#monBouton');

// const triggerClick$ = new Observable<MouseEvent>((subscriber) => {
//   const clickHandlerFn = (event) => {
//     console.log('Event callback executed');
//     subscriber.next(event);
//   };

//   triggerButton.addEventListener('click', clickHandlerFn);

//   return () => {
//     triggerButton.removeEventListener('click', clickHandlerFn);
//   };
// });

// const subscription = triggerClick$.subscribe((event) =>
//   console.log(event.type, event.x, event.y)
// );

// setTimeout(() => {
//   console.log('Unsubscribe');
//   subscription.unsubscribe();
// }, 5000);
// //Creation functions work
// ourOwnOf('Alice', 'Ben', 'Charlie').subscribe({
//   next: value => console.log(value),
//   complete: () => console.log('Completed')
// });

// const names$ = new Observable<string>(subscriber => {
//   subscriber.next('Alice');
//   subscriber.next('Ben');
//   subscriber.next('Charlie');
//   subscriber.complete();
// });

// names$.subscribe({
//   next: value => console.log(value),
//   complete: () => console.log('Completed')
// });

function ourOwnOf(...args: string[]): Observable<string> {
  return new Observable<string>((subscriber) => {
    for (let i = 0; i < args.length; i++) {
      subscriber.next(args[i]);
    }
    subscriber.complete();
  });
}
// //Hot Observable
// const helloButton = document.querySelector('button#hello');
// const helloClick$ = new Observable<MouseEvent>(subscriber => {
//   helloButton.addEventListener('click', (event: MouseEvent) => {
//     subscriber.next(event);
//   });
// });

// helloClick$.subscribe(
//   event => console.log('Sub 1:', event.type, event.x, event.y)
// );

// setTimeout(() => {
//   console.log('Subscription 2 starts');
//   helloClick$.subscribe(
//     event => console.log('Sub 2:', event.type, event.x, event.y)
//   );
// }, 5000);

// //Cold Observable
// const ajax$ = ajax<any>('https://random-data-api.com/api/name/random_name');
// ajax$.subscribe(
//   data => console.log('Sub 1:', data.response.first_name)
// );

// ajax$.subscribe(
//   data => console.log('Sub 2:', data.response.first_name)
// );

// ajax$.subscribe(
//   data => console.log('Sub 3:', data.response.first_name)
// );

// //unsubscribe
// const interval$ = new Observable<number>(subscriber => {
//   let counter = 1;

//   const intervalId = setInterval(() => {
//     console.log('Emitted', counter);
//     subscriber.next(counter++);
//   }, 2000);

//   return () => {
//     clearInterval(intervalId);
//   };
// });

// const subscription = interval$.subscribe(value => console.log(value));

// setTimeout(() => {
//   console.log('Unsubscribe');
//   subscription.unsubscribe();
// }, 7000);

// //Error Notification
// const observable$ = new Observable<string>(subscriber => {
//   console.log('Observable executed');
//   subscriber.next('Alice');
//   subscriber.next('Ben');
//   setTimeout(() => {
//     subscriber.next('Charlie');
//   }, 2000);
//   setTimeout(() => subscriber.error(new Error('Failure')), 4000);

//   return () => {
//     console.log('Teardown');
//   };
// });

// console.log('Before subscribe');
// observable$.subscribe({
//   next: value => console.log(value),
//   error: err => console.log(err.message),
//   complete: () => console.log('Completed')
// });
// console.log('After subscribe');

// //Complete Notification
// const observable$ = new Observable<string>(subscriber => {
//   console.log('Observable executed');
//   subscriber.next('Alice');
//   subscriber.next('Ben');
//   setTimeout(() => {
//     subscriber.next('Charlie');
//     subscriber.complete();
//   }, 2000);

//   return () => {
//     console.log('Teardown');
//   };
// });

// console.log('Before subscribe');
// observable$.subscribe({
//   next: value => console.log(value),
//   complete: () => console.log('Completed')
// });
// console.log('After subscribe');

// //More next notifications
// const observable$ = new Observable<string>((subscriber) => {
//   console.log('Observable executed');
//   subscriber.next('test-1');
//   subscriber.next('test-2');
//   setTimeout(() => subscriber.complete(), 3000);
// });
// console.log('Before');
// observable$.subscribe((value) => console.log(value));
// console.log('After');

// //Next Notification
// const observable$ = new Observable<string>((subscriber) => {
//   console.log('Observable executed');
//   subscriber.next('Alice');
// });

// console.log('Before');
// observable$.subscribe((value) => console.log(value));
// console.log('After');

// // Empty Observable
// const observable$ = new Observable<string>((subscriber) => {
//   console.log('Observable executed');
// });

// console.log('Before subscribe');
// observable$.subscribe((value) => console.log(value));
// console.log('After subscribe');

//créer un observable en utilisant la classe Observable de RxJS qui émet trois valeurs de manière asynchrone
//subscription est établi pour écouter ces valeurs et les afficher dans la console au fur et à mesure qu'elles sont émises
/*const observable$ = new Observable<string>((subscriber) => {
  console.log('Observable executed');
  subscriber.next('test-1');
  setTimeout(() => subscriber.next('test-2'), 2000);
  setTimeout(() => subscriber.next('test-3'), 4000);
});
*/
// const subscription = observable$.subscribe((value) => console.log(value));

// setTimeout(() => {
//   console.log('Unsubscribe');
//   subscription.unsubscribe();
// }, 2000);

/*console.log('Subscription 1 starts');
observable$.subscribe((value) => console.log('Subscription 1:', value));

setTimeout(() => {
  console.log('Subscription 2 starts');
  observable$.subscribe((value) => console.log('Subscription 2:', value));
}, 1000);
*/
