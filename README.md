


# @jackallabs/bech32
[![License: MIT](https://badgen.net/github/license/JackalLabs/bech32)](https://opensource.org/licenses/MIT)
[![github: version](https://badgen.net/github/release/JackalLabs/bech32)](https://github.com/JackalLabs/bech32)
[![npm: version](https://badgen.net/npm/v/@jackallabs/bech32)](https://www.npmjs.com/package/@jackallabs/bech32)

Forked from the [bitcoinjs team](http://github.com/bitcoinjs/bech32). Thank you for all your work!

A [BIP173](https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki)/[BIP350](https://github.com/bitcoin/bips/blob/master/bip-0350.mediawiki) compatible Bech32/Bech32m encoding/decoding library.

## Example
### Sync
``` javascript
const { bech32, bech32m } = require('bech32')

try {
  bech32.decode('abcdef1qpzry9x8gf2tvdw0s3jn54khce6mua7lmqqqxw')
  // => {
  // 	 prefix: 'abcdef',
  // 	 words: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
  // }
  bech32m.decode('abcdef1l7aum6echk45nj3s0wdvt2fg8x9yrzpqzd3ryx')
  // => {
  // 	 prefix: 'abcdef',
  // 	 words: [31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0]
  // }
  
  // toWords etc. are available on both bech32 and bech32m objects
  const words = bech32.toWords(Buffer.from('foobar', 'utf8'))
  bech32.encode('foo', words)
  // => 'foo1vehk7cnpwgry9h96'
  bech32m.encode('foo', words)
  // => 'foo1vehk7cnpwgkc4mqc'
} catch (err) {
  console.error(err)
}
```

### Async
``` javascript
const { bech32, bech32m } = require('bech32')

await bech32.decodeAsync('abcdef1qpzry9x8gf2tvdw0s3jn54khce6mua7lmqqqxw')
// => {
// 	 prefix: 'abcdef',
// 	 words: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
// }
await bech32.decodeAsync('abcdef1l7aum6echk45nj3s0wdvt2fg8x9yrzpqzd3ryx')
// => {
// 	 prefix: 'abcdef',
// 	 words: [31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0]
// }

// toWords etc. are available on both bech32 and bech32m objects
const words = await bech32.toWordsAsync(Buffer.from('foobar', 'utf8'))
await bech32.encodeAsync('foo', words)
// => 'foo1vehk7cnpwgry9h96'
await bech32.encodeAsync('foo', words)
// => 'foo1vehk7cnpwgkc4mqc'
```

### Advanced
BIP173 enforces a limitation of 90 characters,  if extend the `LIMIT` parameter beyond this,  be aware that the [effectiveness of checksum decreases as the length increases](https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki#checksum-design).

It is highly recommended **NOT** exceed 1023 characters, as the module could only guarantee detecting 1 error.


## Credits
- [Peter Wuille](https://github.com/sipa/bech32) for the reference JavaScript implementation, and for authoring the Bech32 [BIP173](https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki) and Bech32m [BIP350](https://github.com/bitcoin/bips/blob/master/bip-0350.mediawiki).


## License [MIT](LICENSE)
