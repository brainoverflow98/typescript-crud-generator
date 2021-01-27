export function Table(name) {
    return function (constructor) {
        constructor.prototype.__tableName = name;
    };
}
