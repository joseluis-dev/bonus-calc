class Activities {
  constructor() {
    this.activityList = []
    this.activityRelations = {}
    this.checkNum = {}
  }

  createActivities(num, colabs) {
    this.activityList = []
    for (let i = 0; i < num; i++) {
      this.activityList.push(i)
      this.activityRelations[i] = Array(colabs).fill('')
      this.checkNum[i] = 0
    }
  }

  checkRelation(activity, index) {
    if (this.activityRelations[activity][index] === '') {
      this.activityRelations[activity].splice(index, 1, '✔')
      this.checkNum[activity]++
    }
    else {
      this.activityRelations[activity].splice(index, 1, '')
      this.checkNum[activity]--
    }
  }

}

export const activities = new Activities()