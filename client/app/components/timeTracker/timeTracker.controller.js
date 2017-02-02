class TimeTrackerController {
  constructor(projectsService, $log, $scope) {
  	"ngInject";
    this.name = 'Project tracking';
    this.projects = projectsService;
    $log.log(this.projects);
    this.activeItem = 'all';
  }
  deselectItemsWithout(id) {
  	console.log(id);
  	this.activeItem = id;
  }
}

export default TimeTrackerController;
