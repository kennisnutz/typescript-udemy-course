type Callback = () => void;

export class Eventing {
  events: { [keys: string]: Callback[] } = {};

  on = (eventName: string, callBack: Callback): void => {
    const handlers = this.events[eventName] || [];
    handlers.push(callBack);
    this.events[eventName] = handlers;
  };

  trigger = (eventNsme: string): void => {
    const handlers = this.events[eventNsme];
    if (!handlers || handlers.length === 0) {
      return;
    }
    handlers.forEach((callback) => {
      callback();
    });
  };
}
