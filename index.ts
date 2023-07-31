import { Observable } from 'rxjs';
// Empty Observable
const observable$ = new Observable<string>((subscriber) => {
  console.log('Observable executed');
});

console.log('Before subscribe');
observable$.subscribe((value) => console.log(value));
console.log('After subscribe');

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
