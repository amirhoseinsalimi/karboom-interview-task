import store from '../store';

export default class Utils {
  static generateRandomHexColor() {
    let hexColor = '#';

    // Call the method six times
    for (let i = 1; i < 7; i += 1) {
      hexColor += PrivateUtils.getAHexCharacter();
    }

    return hexColor;
  }

  static storeBiggestItemId(items) {
    const ids = [];

    // Compute the biggest ID between item ids
    items.forEach(({id}) => {
      ids.push(id);
    });

    store.commit('changeBiggestItemId', PrivateUtils.max(ids));
  }
}

/**
 * Private utils that don't expose to outer modules
 * For internal usage only
 */
class PrivateUtils {
  /**
   * Return a character from 0 to F (Hex code)
   */
  static getAHexCharacter() {
    const characters = [
      '0', '1', '2', '3',
      '4', '5', '6', '7',
      '8', '9', 'A', 'B',
      'C', 'D', 'E', 'F',
    ];

    const randomNumber = this.generateRandomNumber(characters.length);

    return characters[randomNumber];
  }

  /**
   * Generate a random number equal or lesser than the specified `max`
   * @param max
   * @returns {number}
   */
  static generateRandomNumber(max) {
    return Math.floor(Math.random() * max)
  }

  /**
   * Return the biggest number of an array of numbers
   * @param arrayOfNumbers
   * @returns {number}
   */
  static max(arrayOfNumbers) {
    const length = arrayOfNumbers.length;
    let max = arrayOfNumbers[0];

    for (let i = 1; i < length; i += 1) {
      max = Math.max(arrayOfNumbers[i], max);
    }

    // We could also use `Array.prototype.forEach()`

    return max;
  }
}
