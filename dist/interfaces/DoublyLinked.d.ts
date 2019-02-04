export default interface DoublyLinked<T> {
    prev(): T;
    next(): T;
}
