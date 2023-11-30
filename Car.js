class Car {
  constructor() {
    this.rightDoor = new Door();
    this.leftDoor = new Door();
    this.switch = new Switch();
  }

  operateRight() {
    this.rightDoor.operate();
  }

  operateLeft() {
    this.leftDoor.operate();
  }

  setSwitchToOn() {
    this.switch.on();
  }

  setSwitchToOff() {
    this.switch.off();
  }

  setSwitchToMiddle() {
    this.switch.middle();
  }

  isRightDoorOpen() {
    return this.rightDoor.isOpen();
  }

  isLeftDoorOpen() {
    return this.leftDoor.isOpen();
  }

  isOneDoorOpen() {
    return this.isRightDoorOpen() || this.isLeftDoorOpen();
  }

  getSwitchPosition() {
    return this.switch.position;
  }
}
