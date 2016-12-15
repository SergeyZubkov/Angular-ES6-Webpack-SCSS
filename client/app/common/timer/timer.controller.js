class TimerController {
  constructor(value = this.value) {
    this.on = false;
  }
  toggle() {
  	this.on = !this.on
  }
}

export default TimerController;
