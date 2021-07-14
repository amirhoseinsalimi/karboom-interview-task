export default class Utils {
    static generateRandomHexColor() {
        let hexColor = '#';

        // Call the method six times
        for (let i = 1; i < 7; i += 1) {
            hexColor += PrivateUtils.getAHexCharacter();
        }

        return hexColor;
    }
}

/**
 * Private utils that doesn't expose to outer modules
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

    static generateRandomNumber(max) {
        return Math.floor(Math.random() * max)
    }
}
