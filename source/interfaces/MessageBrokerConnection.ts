import { UniquelyIdentified } from "./UniquelyIdentified";

export
interface Connection extends UniquelyIdentified {
    open () : void;
    close () : void;
}