"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiSubscription = void 0;
function MultiSubscription() {
    var values = [];
    return function (target, key) {
        Object.defineProperty(target, key, {
            set: function (value) {
                values.push(value);
                return values;
            },
        });
        Object.defineProperty(target, 'unsubscribe', {
            value: function () {
                values.forEach(function (sub) { return sub === null || sub === void 0 ? void 0 : sub.unsubscribe(); });
                values = [];
            }
        });
    };
}
exports.MultiSubscription = MultiSubscription;
