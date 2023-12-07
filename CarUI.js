class CarUI {
  constructor() {
    this.car = new Car();
    //this.carPicture = new CarPicture;
    //this.lightPicture = new LightPicture;
  }

  operateDoor(side, buttonElement) {
    this.changeDoorButtonValue(buttonElement);
    if (side == "leftDoor") {
      this.car.operateLeftDoor();
    }
    if (side == "rightDoor") {
      this.car.operateRightDoor();
    }
  }

  operateSwitch(radioButtonid) {
    if (radioButtonid == "on") {
      this.car.setSwitchToOn();
    }
    if (radioButtonid == "off") {
      this.car.setSwitchToOff();
    }
    if (radioButtonid == "middle") {
      this.car.setSwitchToMiddle();
    }
  }

  changeDoorButtonValue(buttonElement) {
    if (buttonElement.value == "Ouvrir") {
      buttonElement.value = "Fermer";
    } else {
      buttonElement.value = "Ouvrir";
    }
  }
}
