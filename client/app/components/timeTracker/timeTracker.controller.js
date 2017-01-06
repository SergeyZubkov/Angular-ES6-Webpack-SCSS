class TimeTrackerController {
  constructor(projectsService) {
  	"ngInject";
    this.name = 'Project tracking';
    this.projects = projectsService.getAll();
  }
}

export default TimeTrackerController;
