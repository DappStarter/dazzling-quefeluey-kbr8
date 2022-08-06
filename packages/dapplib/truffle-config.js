require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remind concert grace creek force tuna'; 
let testAccounts = [
"0xd635b81a74116cd4a15f20fa0846cbff81b29d12c2cab8de09d94b2f60e15e2f",
"0x1ce24a38113fd81f2716d80efd1268a3c81114dcffdf88de828fcd6e9fb856bd",
"0xc22b25e722ad06577343436c94c534b20505d816b94c77f4592b72b9e0c4aea9",
"0x1ae75b767a384ca059cb29db42a8fc1e76462afa0dfe539a60f860f0e276607d",
"0x5ea742bc70320588e2e9aa2f5b697e300c8daa78347712fd9b8443ad19e8daf4",
"0xdd47e5dc340acde88a2f787ed60e84e0426d0cd9c40cbf418244d5df4317e5c3",
"0xfa381a21c3473da5569e3ab210a0c30acc23d353cb54ffba40c25a76f8690b88",
"0x3250f4f776df3556dd84150ab7203d296a4b9d91421ff9d8ec685dc299d7c934",
"0xb4c7e22e8765d6e5bd02f763006971cba0ed831674e7a9b1068b91ba26f8c90d",
"0x7bf8cba48c54685d85e41205ca9648fcfec1bc48430d2334123fe08d51182cf3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

