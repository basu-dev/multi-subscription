export function MultiSubscription() {
  let values = [];

  return function (target: any, key: any) {
    Object.defineProperty(target, key, {
      set: (value: any) => {
        values.push(value);
        return values;
      },
    });
    Object.defineProperty(target, 'unsubscribe', {
      value: () => {
        values.forEach(sub => sub?.unsubscribe());
        values = [];
      }
    });
  };
}



