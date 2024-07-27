# Resolution

## Install

```bash
npm install @simonpai/resolution --save
```

## Usage

```js
import resolution from '@simonpai/resolution';

const res = resolution();

await res.promise;
res.resolve('value');
res.reject('error');
```
