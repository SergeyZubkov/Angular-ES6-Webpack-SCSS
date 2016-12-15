class TopPanelController {
  constructor(projectsService) {
    "ngInject";
    this.projectsService = projectsService;
  }
  create(project) {
  	this.projectsService.add(project);
  	this.title = this.rate = '';
  }
}

export default TopPanelController;
