import cuid from 'cuid';
//import 'core-js/modules/es6.array.find';

export default class projectsService {

  constructor(localStorageService) {
    "ngInject"
    this.localStorageService = localStorageService;
    this.projects = localStorageService.get("projects");
    if (!this.projects) {
      this.projects = localStorageService.set("projects", [])
    }
    this.projects = this.projects.map((project) => new Project(project))
  }

  getAll() {
    return this.projects;
  }

  add(data) {
    this.projects.push(new Project(data));

    this._saveInLocalStorage();

    return this.projects
  }

  get(id) {
    return this.projects.filter((p) => p.id === id)[0]
  }

  update(id, data) {
    let finding = this.get(id);

    if(!finding) return;

    finding = angular.extend(finding, data);

    this._saveInLocalStorage();

    return finding;
  }
  _saveInLocalStorage() {
    this.localStorageService.set("projects", this.projects)
  }
}

class Project {

  constructor(data) {
    this.id = cuid();
    this.title = data.title;
    this.rate = data.rate;
    this.timeSpent = data.timeSpent||0;
  }

  getSum() {
    return parseFloat(this.rate * (this.timeSpent / 1000 / 60 /60), 2).toFixed(2)
  }
}
