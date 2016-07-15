/**
 * Created by YXP on 16/7/15.
 */
var storage = localStorage;
var TodoKey = 'todos';

module.exports = function (value) {
    if (value) {
        storage.setItem(TodoKey, JSON.stringify(value));
    } else {
        return JSON.parse(storage.getItem(TodoKey) || '[]');
    }
}
