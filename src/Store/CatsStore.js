import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._likedCats = [];
        makeAutoObservable(this);
    }

    setLikedCats(likedCats) {
        this._likedCats = likedCats;
    }

    get likedCats() {
        return this._likedCats;
    }
}