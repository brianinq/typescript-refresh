"use strict";
class SeatAssignment {
}
const seats = new SeatAssignment();
seats.a1 = "seat a1";
seats["100"] = "Numeric seat 1";
class Ride {
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
const ride1 = new Ride();
ride1.start();
const ride2 = new Ride();
ride2.start();
console.log(Ride.activeRides);
