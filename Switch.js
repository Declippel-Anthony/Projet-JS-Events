class Switch {
  constructor() {
    this.off();
  }

  on() {
    this.position = SwitchPosition.on;
  }

  off() {
    this.position = SwitchPosition.off;
  }

  middle() {
    this.position = SwitchPosition.middle;
  }

  isOn() {
    if (this.position === SwitchPosition.on) return true;
  }

  isOff() {
    if (this.position === SwitchPosition.off) return true;
  }

  isMiddlePosition() {
    if (this.position === SwitchPosition.middle) return true;
  }
}
