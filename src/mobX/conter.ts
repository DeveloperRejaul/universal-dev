import { makeAutoObservable } from "mobx"

class Counter {
    count = 0

    constructor() {
        makeAutoObservable(this)
    }

    increaseTimer() {
        this.count += 1
    }
}

export const counter = new Counter()