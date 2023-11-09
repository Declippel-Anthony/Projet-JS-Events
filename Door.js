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
    if (this.state == true) this.close();
    else this.open();
  }

  isOpen() {
    if (this.state == true) console.log("La porte est ouverte");
    else console.log("La porte est fermée");
  }
}
