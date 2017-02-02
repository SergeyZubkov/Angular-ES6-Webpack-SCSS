class ProjectItemController {
  constructor(projectsService) {
  	"ngInject"
    this.name = 'projectItem';
    this.projectsService = projectsService;
    this.isEdit = false;
    this.workTimer = false;
  }
  totalCost() {
  	return this.project.timeSpent * this.project.rate;
  }
  setTimeSpent(value) {
  	this.projectsService.update(this.project.id, {timeSpent: value});
  }
  delete() {
    this.projectsService.remove(this.project.id);
  }

  finish() {
    this.projectsService.update(this.project.id, {complite: true});
  }

  reopen() {
    this.projectsService.update(this.project.id, {complite: false});
  }

  edit() {
    this.isEdit = true;
    this.workTimer = false;

    this.newData = {};
    this.newData.timeSpent = {};

    this.newData.title = this.project.title;
    this.newData.rate = this.project.rate;

    this.newData.timeSpent.hours = this.project.getTimeSpentInFormat('h');
    this.newData.timeSpent.minutes = this.project.getTimeSpentInFormat('m');

  }
  saveChanges() {
    this.newData.timeSpent = +this.newData.timeSpent.hours * 60 * 60 * 1000 + (+this.newData.timeSpent.minutes * 60 * 1000);

    this.projectsService.update(this.project.id, this.newData);

    this.isEdit = false;
  }
  cancel() {
    this.isEdit = false;
  }
}

export default ProjectItemController;
