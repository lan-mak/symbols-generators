export default class Team {
  constructor() {
    this.team = new Set();
  }

  addInTeam(person) {
    this.team.add(person);
  }

  creatArray() {
    return Array.from(this.team);
  }

  * [Symbol.iterator]() {
    for (const item of this.members) {
      yield item;
    }
  }
}
