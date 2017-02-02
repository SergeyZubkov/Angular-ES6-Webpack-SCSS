class ProjectFormController {
  constructor(projectsService, $log, $timeout) {
    "ngInject";
    this.projectsService = projectsService;
   	$timeout(() => $log.info(this.createForm));
  }
  create(project) {
  	if (this.createForm.$valid) {
  		this.projectsService.add(project);
  		this.title = this.rate = '';
  		this.createForm.$submitted = false;
  	}
  }
}

export default ProjectFormController;
