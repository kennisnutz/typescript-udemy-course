import 'reflect-metadata';

@controller
class Plane {
  color: string = 'red';

  @get('flexing')
  fly(): void {
    console.log('vrrrrr');
  }
}

function get(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('path', secretInfo, target, key);
  };
}

function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata('path', target.prototype, key);
    console.log(secret);
  }
}
