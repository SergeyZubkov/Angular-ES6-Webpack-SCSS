class TimeTrackerController {
  constructor(projectsService) {
  	"ngInject";
    this.name = 'timeTracker';
    this.projects = projectsService.getAll();
  }
}

export default TimeTrackerController;
