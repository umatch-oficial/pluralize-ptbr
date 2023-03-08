"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _plural_1 = __importDefault(require("./_plural"));
/**
 * Returns the lowercase version of the string and an array of booleans
 * indicating whether the letter at each position was uppercase.
 */
function decapitalize(string) {
    const lower = string.toLowerCase();
    const diff = lower.split('').map((letter, i) => letter !== string[i]);
    return [lower, diff];
}
/**
 * Returns the original casing of the string by applying uppercase at
 * the correct positions.
 */
function capitalize(string, positions) {
    const letters = string.split('');
    return letters
        .map((letter, i) => (positions[i] ? letter.toUpperCase() : letter))
        .join('');
}
/**
 * Returns the plural form of the word.
 *
 * If quantity is given, it prefixes the output. The word is only
 * pluralized if |quantity| > 1.
 */
function plural(word, quantity = null) {
    if (quantity && Math.abs(quantity) <= 1 && Math.abs(quantity) !== 0) {
        return `${quantity} ${word}`;
    }
    const trimmed = word.trim();
    const [lowerCase, caps] = decapitalize(trimmed);
    const pluralized = (0, _plural_1.default)(lowerCase);
    const originalCased = capitalize(pluralized, caps);
    return `${quantity !== null ? quantity + ' ' : ''}${originalCased}`;
}
exports.default = plural;
