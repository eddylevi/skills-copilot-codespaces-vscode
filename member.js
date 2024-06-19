function skillsMember() {
  return {
    skills: ['JavaScript', 'React', 'Node.js'],
    addSkill(skill) {
      this.skills.push(skill);
    },
  };
}