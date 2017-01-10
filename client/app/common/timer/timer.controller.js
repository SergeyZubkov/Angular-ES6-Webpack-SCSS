class TimerController {
  constructor($interval) {
  	"ngInject"
    this.timerOn = false;
    this.$interval = $interval
  }
  start() {
  	if(this.disabled) return 
  	this.timerOn = true;
  	this.onStart();

    let self = this;

  	this.interval = this.$interval(function() {
      self.onTick({value: self.value+1000})
  	}, 1000)
  }
  pause() {
  	if(this.disabled) return
  	this.timerOn = false;
  	this.onPause();

  	this.$interval.cancel(this.interval)
  }
  getFormattedValue() {
  	let s = +this.value / 1000
  	let m = Math.floor(s / 60);
  	s = s - m * 60;
  	let h = Math.floor(m / 60);
  	m = Math.round(m - 60 * h);
  	return [h,m,s].map((v) => v < 10 ? `0${v}` : v).join(':');
  }
}

export default TimerController;
