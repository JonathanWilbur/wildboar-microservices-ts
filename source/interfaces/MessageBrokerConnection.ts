import UniquelyIdentified from "./UniquelyIdentified";

export default
interface MessageBrokerConnection extends UniquelyIdentified {
    open () : void;
    close () : void;
}