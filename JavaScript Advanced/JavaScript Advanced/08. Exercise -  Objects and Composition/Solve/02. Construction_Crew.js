function constructionCrew(obj){
    
    if (obj.dizziness === true) {
        let requiredWater = 0.1 * obj.weight * obj.experience;
        obj.levelOfHydrated += requiredWater;
        obj.dizziness = false;
    }
    return obj;
}

constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  )