import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

//Fromevent
const triggerButton = document.querySelector('#monBouton');

const triggerClick$ = new Observable<MouseEvent>((subscriber) => {
  const clickHandlerFn = (event) => {
    console.log('Event callback executed');
    subscriber.next(event);
  };

  triggerButton.addEventListener('click', clickHandlerFn);

  return () => {
    triggerButton.removeEventListener('click', clickHandlerFn);
  };
});

const subscription = triggerClick$.subscribe((event) =>
  console.log(event.type, event.x, event.y)
);

setTimeout(() => {
  console.log('Unsubscribe');
  subscription.unsubscribe();
}, 5000);
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
