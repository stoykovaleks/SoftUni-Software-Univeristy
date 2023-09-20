function flightSchedule(input) {
    let flight = input[0];
    let changedStatus = input[1];
    let statusToCheck = input[2][0];

    let flightAsObj = {};

    for (const flights of flight) {
        let [flightNumber, destination] = flights.split(" ");
        flightAsObj[flightNumber] = {
            Destination: destination,
            Status: 'Ready to fly',
        };
    }
    for (let changedStatuses of changedStatus) {
        let [flightNumber, status] = changedStatuses.split(" ");

        if (flightAsObj[flightNumber]) {
            flightAsObj[flightNumber].Status = status;
        }
    }
    for (let flightNumber in flightAsObj) {
        if (flightAsObj[flightNumber].Status === statusToCheck) {
            console.log(flightAsObj[flightNumber]);
        }
    }

}
let flightSchedule = [
    [
      'WN269 Delaware',
      'FL2269 Oregon',
      'WN498 Las Vegas',
      'WN3145 Ohio',
      'WN612 Alabama',
      'WN4010 New York',
      'WN1173 California',
      'DL2120 Texas',
      'KL5744 Illinois',
      'WN678 Pennsylvania',
    ],
    ['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK430 Cancelled'],
    ['Cancelled'],
  ];