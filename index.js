const HDWallet = require('ethereum-hdwallet')
const readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
  
rl.question("Mnemonic: ", function(mnemonic) {
    const hdwallet = HDWallet.fromMnemonic(mnemonic)
    console.log(`0x${hdwallet.derive(`m/44'/60'/0'/0/0`).getAddress().toString('hex')}`)
    console.log(`0x${hdwallet.derive(`m/44'/60'/0'/1/0`).getAddress().toString('hex')}`)
  
    rl.close();
});