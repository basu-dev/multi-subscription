# MultiSubscription

**Unsubscribes multiple RXJS subscription at once.**

It is the easiest implementation for unsubscribing multiple RXJS subscriptions at once.
Its an easier alternative to SubSink.

> You can use it with any frameworks that uses RXJS subscriptions line Angular, Nest etc.

> Adds only 400 bytes to your production bundle.

## Installation

```bash
npm install multi-subscription --save
```

## Examples

As you can see in the code below, we declare only one subscription variable and decorate it with `@MultiSubscription()` decorator, use that same variable for all subscriptions and unsubscribe tha one subscription at the end.<br>

.

```ts
import {MultiSubscription } from "multisubscription"
.
.
export class ChildComponent implements OnInit {

  @MultiSubscription()
  sub!: Subscription;

  ngOnInit() {
    this.sub = interval(1000).subscribe(data => {
      console.log('%cChild Component 1', 'font-weight: bold;color:red', data);

    });

    this.sub = interval(1000).subscribe(data => {
      console.log('%cChild Component 1', 'font-weight: bold;color:blue', data);
    });

    this.sub = interval(1000).subscribe(data => {
      console.log('%cChild Component 1', 'font-weight: bold', data);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
```

In the above example, we have three subscriptions which are all unsubscribed at once when we call `unsubscribe()` method inside `ngOnDestroy()`.

## How does it work

What the decorator does is it collects all the subscriptions inside an array under the hood and when you call unsubscribe on that one subscription variable it unsubscribes all the other subscriptions and clears the array.
