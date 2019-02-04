export
function serializeTimestamp (timestamp : Date) : string {
    return timestamp.toISOString();
}

export
function deserializeTimestamp (timestamp : string) : Date {
    return new Date(timestamp);
}

export
function serializeDate (date : Date) : string {
    const paddedYear : string = date.getUTCFullYear().toString().padStart(4, "0");
    const paddedMonth : string = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const paddedDay : string = date.getUTCDate().toString().padStart(2, "0");
    return `${paddedYear}-${paddedMonth}-${paddedDay}`;
}

export
function deserializeDate (date : string) : Date {
    if (date.length !== "XXXX-XX-XX".length) throw new Error("Invalid date.");
    const match : RegExpExecArray | null = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date);
    if (!match) throw new Error("Invalid date.");
    return new Date(Number(match[1]), (Number(match[2]) - 1), Number(match[3]));
}