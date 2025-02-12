// indexed signatures for creating dynamic properities

class SeatAssignment {
  // index signature property/
  [seatNumber: string]: string;
}

const seats = new SeatAssignment();
seats.a1 = "seat a1";
seats["100"] = "Numeric seat 1";

// static properties

class Ride {
  private static _activeRides = 0;

  start() {
    Ride._activeRides++;
  }
  stop() {
    Ride._activeRides--;
  }

  static get activeRides() {
    return Ride._activeRides;
  }

  // set activeRides(count: number) {
  //   Ride._activeRides + count;
  // }
}

const ride1 = new Ride();
ride1.start();
const ride2 = new Ride();
ride2.start();
console.log(Ride.activeRides);
