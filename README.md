# next-global-event
> Window event for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-global-event
```

## apis
| api  | params          | description    |
| ---- | --------------- | -------------- |
| on   | (name, handler) | Attach event.  |
| emit | (name, data)    | Trigger event. |

## usage
```js
import NxGlobalEvent from '@jswork/next-global-event';

// attach event
const res = NxGlobalEvent.on('panel:ok', (inEvent)=>{
  console.log('I am ok');
});

// dettach event
res.destroy();

// trigger event
NxGlobalEvent.emit('panel:ok', { data: true });
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-global-event/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-global-event
[version-url]: https://npmjs.org/package/@jswork/next-global-event

[license-image]: https://img.shields.io/npm/l/@jswork/next-global-event
[license-url]: https://github.com/afeiship/next-global-event/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-global-event
[size-url]: https://github.com/afeiship/next-global-event/blob/master/dist/next-global-event.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-global-event
[download-url]: https://www.npmjs.com/package/@jswork/next-global-event
