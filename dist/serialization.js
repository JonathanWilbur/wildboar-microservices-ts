"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function serializeTimestamp(timestamp) {
    return timestamp.toISOString();
}
exports.serializeTimestamp = serializeTimestamp;
function deserializeTimestamp(timestamp) {
    return new Date(timestamp);
}
exports.deserializeTimestamp = deserializeTimestamp;
function serializeDate(date) {
    const paddedYear = date.getUTCFullYear().toString().padStart(4, "0");
    const paddedMonth = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const paddedDay = date.getUTCDate().toString().padStart(2, "0");
    return `${paddedYear}-${paddedMonth}-${paddedDay}`;
}
exports.serializeDate = serializeDate;
function deserializeDate(date) {
    if (date.length !== "XXXX-XX-XX".length)
        throw new Error("Invalid date.");
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date);
    if (!match)
        throw new Error("Invalid date.");
    return new Date(Number(match[1]), (Number(match[2]) - 1), Number(match[3]));
}
exports.deserializeDate = deserializeDate;
//# sourceMappingURL=serialization.js.map