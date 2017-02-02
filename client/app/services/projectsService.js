import cuid from 'cuid';
//import 'core-js/modules/es6.array.find';

export default class projectsService {

  constructor(localStorageService) {
    "ngInject"
    this.filterState = 'current'
    this.localStorageService = localStorageService;
    this.list = localStorageService.get("projects");
    if (!this.list) {
      if(localStorageService.set("projects", [])) {
        this.list = localStorageService.get('projects')
      }
    }
    this.filteredList = this.list = this.list.map((project) => new Project(project));
    this._filteredListRefresh();
  }

  add(data) {
    this.list.push(new Project(data));

    this._filteredListRefresh();

    this._saveInLocalStorage();

    return this.list
  }

  get(id) {
    return this.list.filter((p) => p.id === id)[0]
  }

  remove(id) {
    let project = this.get(id);

    let index = this.list.indexOf(project);

    this.list.splice(index, 1);

    this._filteredListRefresh();

    this._saveInLocalStorage();
  }

  update(id, data) {
    let finding = this.get(id);

    if(!finding) return;

    finding = angular.extend(finding, data);

    this._filteredListRefresh();

    this._saveInLocalStorage();

    return finding;
  }

  filterBy(filter) {

    switch(filter) {

      case 'complite':
        this.filteredList = this.list.filter(item => item.complite);
        break;
      case 'current':
        this.filteredList = this.list.filter(item => !item.complite);
        break;
      case 'all':
        this.filteredList = this.list;
    }
    this.filterState = filter;
  }

  _filteredListRefresh() {
    if(this.list.length) {
      this.filterBy(this.filterState);
    }
  }

  _saveInLocalStorage() {
    this.localStorageService.set("projects", this.list)
  }
}

class Project {

  constructor(data) {
    this.id = cuid();
    this.title = data.title;
    this.rate = data.rate;
    this.timeSpent = data.timeSpent||0;
    this.complite = data.complite||false;
  }

  getSum() {
    return parseFloat(this.rate * (this.timeSpent / 1000 / 60 /60), 2).toFixed(2)
  }
  getTimeSpentInFormat(format) {
    let res, h, m, s = this.timeSpent / 1000;
    
    m = Math.floor(s / 60);
    s = s - m * 60;
    h = Math.floor(m / 60);
    m = Math.round(m - 60 * h);

    switch (format) {
      case 's':
        res = s;
        break;
      case 'm':
        res = m;
        break;
      case 'h':
        res = h;
        break
      case 'hms':
        res = [h,m,s].map((v) => v < 10 ? `0${v}` : v).join(':');
        break
    }
    return res
  }
}
