class TimerController {
  constructor($scope, $interval) {
  	"ngInject"
    this.work = false;
    this.$interval = $interval;

    $scope.$watch("$ctrl.work", (newValue, oldValue) => {
      if (newValue !== oldValue) {
        if (this.disabled) {
          console.log(this.work);
          return;
        }
        if (newValue) {
          this.start();
        } else {
          this.pause();
        }
      }
    });
    $scope.$on('$destroy', ()=> this.pause());
  }
  on() {
    if (this.disabled) {
      return
    }
    this.work = true;
  }
  off() {
    if (this.disabled) {
      return
    }
    this.work = false;
  }
  start() {
  	this.onStart();

  	this.interval = this.$interval(() => {
      this.onTick({value: this.value+1000});
  	}, 1000);
  }
  pause() {
  	this.onPause();
  	this.$interval.cancel(this.interval);
  }
  getFormattedValue() {
  	let s = +this.value / 1000;
  	let m = Math.floor(s / 60);
  	s = s - m * 60;
  	let h = Math.floor(m / 60);
  	m = Math.round(m - 60 * h);
  	return [h,m,s].map((v) => v < 10 ? `0${v}` : v).join(':');
  }
}

export default TimerController;
