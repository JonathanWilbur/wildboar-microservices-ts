export default
interface Deque<T> {
    push (item : T) : void;
    unshift (item : T): void;
    pop () : T;
    shift () : T;
}