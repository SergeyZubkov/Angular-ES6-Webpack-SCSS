
//import 'core-js/modules/es6.array.find';

export default class projectsService {

  constructor() {
    this.projects = this.projects = [
    {
      title: 'Angular', timeSpent: 0, rate: 20
    },
    {
      title: 'React', timeSpent: 2000, rate: 15
    }]
  }

  getAll() {
    return this.projects;
  }

  add(data) {
    this.projects.push(new Project(data))
    return this.projects
  }
}

class Project {

  constructor(data) {
    this.title = data.title;
    this.rate = data.rate;
    this.timeSpent = 0;
  }

}
