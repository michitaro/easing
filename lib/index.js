"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function linear(x) {
    return x;
}
exports.linear = linear;
function slowStart2(x) {
    return x * x;
}
exports.slowStart2 = slowStart2;
function fastStart2(x) {
    x = 1 - x;
    return x * x;
}
exports.fastStart2 = fastStart2;
function slowStart4(x) {
    x = x * x;
    return x * x;
}
exports.slowStart4 = slowStart4;
function fastStart4(x) {
    x = x * x;
    return 1 - x * x;
}
exports.fastStart4 = fastStart4;
function slowStartStop2(x) {
    return x;
}
exports.slowStartStop2 = slowStartStop2;
function fastStartStop2(x) {
    return x;
}
exports.fastStartStop2 = fastStartStop2;
