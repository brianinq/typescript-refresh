// indexed signatures for creating dynamic properities

class SeatAssignment {
  // index signature property/
  [seatNumber: string]: string;
}

const seats = new SeatAssignment();
seats.a1 = "seat a1";
seats["100"] = "Numeric seat 1";
