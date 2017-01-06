class TopPanelController {
  constructor(projectsService, $log, $timeout) {
    "ngInject";
    this.projectsService = projectsService;
   	$timeout(() => $log.info(this.createProjectTrackerForm))
  }
  create(project) {
  	if(this.createProjectTrackerForm.$valid) {
  		this.projectsService.add(project);
  		this.title = this.rate = '';
  		this.createProjectTrackerForm.$submitted = false;
  	}
  }
}

export default TopPanelController;
