class ProjectItemController {
  constructor(rateFilter) {
  	"ngInject"
    this.name = 'projectItem';
  }
  totalCost() {
  	return this.data.timeSpent * this.data.rate
  }
}

export default ProjectItemController;
