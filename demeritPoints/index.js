// Take a num argument for speed and console.log if points are given for speeds over a 70 speed limit or if a license is revoked (above )
// if below 70 console log "OK"
// if above 70 km/h : give 1 point for every 5 km/h above 70 and console.log points
// if more than 12 points revoke  license

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) console.log('OK');
  else {
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12) console.log('License suspended');
    else console.log('Points :', points);
  }
}
