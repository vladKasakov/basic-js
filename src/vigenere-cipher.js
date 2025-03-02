const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    let encryptedMessage = [];
    let keyCount = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message[i];

      if (/[a-zA-Z]/.test(char)) {
        let textCharCode = char.toUpperCase().charCodeAt(0);
        let keyCharCode = key[keyCount % key.length]
          .toUpperCase()
          .charCodeAt(0);

        let encryptedCharCode =
          ((textCharCode - 65 + (keyCharCode - 65)) % 26) + 65;

        encryptedMessage.push(String.fromCharCode(encryptedCharCode));
        keyCount++;
      } else {
        encryptedMessage.push(char);
      }
    }

    return this.isDirect
      ? encryptedMessage.join('')
      : encryptedMessage.reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    let decryptedMessage = [];
    let keyCount = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message[i];

      if (/[a-zA-Z]/.test(char)) {
        let textCharCode = char.toUpperCase().charCodeAt(0);
        let keyCharCode = key[keyCount % key.length]
          .toUpperCase()
          .charCodeAt(0);

        let decryptedCharCode =
          ((textCharCode - 65 - (keyCharCode - 65) + 26) % 26) + 65;

        decryptedMessage.push(String.fromCharCode(decryptedCharCode));
        keyCount++;
      } else {
        decryptedMessage.push(char);
      }
    }

    return this.isDirect
      ? decryptedMessage.join('')
      : decryptedMessage.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine,
};
