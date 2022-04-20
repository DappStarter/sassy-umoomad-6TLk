require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict argue system venture struggle repeat sad unit gesture canoe army gauge'; 
let testAccounts = [
"0xe78475d3054e075ffa1986e9a7210bf1fa87146b73b11b6e35e02eb2d34dc8cd",
"0xd633b429b72fa11c6103b0e2834710769f8c93360d75f3d16029c2ebad86b6c0",
"0xb10445237bd52380cdcaeb35560b35c6748ac42615cb848b45580cfb130d3eeb",
"0x546307ccc7a7a42976e147bdce7b530094795020506c1b02d5a181c966d82c4a",
"0xaae6a9be39c498bf84b464bb77dd039f1302069d75b783363088e24d7b24da30",
"0xb321c4c0b34c09f389d61e89b722d053a6f7ed15b76bd06b43fbea73df9ba9aa",
"0xe55155f7ebde8681f9460a9fe5955bde0d3bc2b880e9bd5e2200d47d26ccd73d",
"0x09f31bcb36fe1ce574f227caa74ea68efc8738f6976afb686b3adb356a5fa3bf",
"0x180c1905bc128d4c7ec65bd3ca71c0d5aea432f90e9f0f6c31dcb3bd443b91bb",
"0xa08e74b5347c7f402e65759252fd43bf29ab0e6f86de5018a89c3bda70e814e0"
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

