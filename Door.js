class Door {
  constructor() {
    this.close();
  }

  open() {
    this.state = true;
  }

  close() {
    this.state = false;
  }

  operate() {
    if (this.isOpen()) this.close();
    else this.open();
  }

  isOpen() {
    return this.state;
  }
}
