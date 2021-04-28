let moves = [];
function robots(req, res, next) {
  let param = req.params.response;
  let movements = param;
  let pinkButton = 0;
  let greenButton = 0;
  let seconds = 0;
  let caso = 1;
  let first = true;
  let robotStart = true;
  let robots = [];
  let press = 0;
  let pinkToGo = 0;
  let greenToGo = 0;
  let waitPink = false;
  let r = "";
  let rob = "";
  let long = movements.length;

  for (var i = 1; i < long; i++) {
    if (
      movements.substring(i, i + 1).toLowerCase() === "r" ||
      movements.substring(i, i + 1).toLowerCase() === "v"
    ) {
      if (robotStart) {
        robotStart = false;
      } else {
        robots.push(r);
      }
      robot = movements.substring(i, i + 1).toLowerCase();
    } else {
      robot = robot + movements.substring(i, i + 1);
    }
    if (i > long - 2) {
      robots.push(robot);
    }
  }

  for (let i = 0; i < robots.length; i++) {
    if (robots[i].toString().substring(0, 1).toLowerCase() === "v") {
      rob = robots[i].toString();
      greenButton = parseInt(rob.substring(1));
      greenToGo = greenButton - greenToGo;
      greenButton = greenToGo;

      if (waitPink) {
        waitPink = false;
        seconds = seconds + 1;
      }
      seconds = seconds + greenButton;
      press = press + 1;
    }
    if (robots[i].toString().substring(0, 1).toLowerCase() === "r") {
      rob = robots[i].toString();
      pinkButton = parseInt(rob.substring(1));
      pinkToGo = pinkButton - pinkToGo;
      pinkButton = pinkToGo;
      if (first) {
        if (pinkButton >= 0) {
          waitPink = true;
        }
        seconds = seconds + pinkButton - 1;
        first = false;
      } else {
        seconds = seconds + pinkButton;
      }
      press = press + 1;
    }

    if (robots.length != parseInt(movements.substring(0, 1))) {
      res.status(300).send("Los datos introducidos no son validos");
    }
  }
  long = moves.length;
  if (moves) {
    caso = moves.length + 1;
  }

  moves.push("Caso: " + caso + " Segundos : " + seconds);
  res.status(200).send(moves);
}

module.exports = {
  robots,
};
