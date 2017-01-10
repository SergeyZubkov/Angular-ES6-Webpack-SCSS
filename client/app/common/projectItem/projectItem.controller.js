class ProjectItemController {
  constructor(projectsService) {
  	"ngInject"
    this.name = 'projectItem';
    this.projectsService = projectsService;
  }
  totalCost() {
  	return this.projectData.timeSpent * this.projectData.rate
  }
  setTimeSpent(id,value) {
  	this.projectsService.update(id, {timeSpent: value})
  }
}

export default ProjectItemController;
