/**
Create your own named sub-type from a type **`A`**
@param A to be personalized
@param Id to name the sub-type
@returns A new type **`Type<A, Name>`**
@example
```ts
import {A} from 'ts-toolbelt'

type EUR = Type<number, 'eur'>
type USD = Type<number, 'usd'>

let eurWallet = 10 as EUR
let usdWallet = 15 as USD

eurWallet = usdWallet // error
```
*/
const UniqueSymbol = Symbol();
export type Type<A extends any, Id extends string> =
    A & {[K in typeof UniqueSymbol]: Id}
