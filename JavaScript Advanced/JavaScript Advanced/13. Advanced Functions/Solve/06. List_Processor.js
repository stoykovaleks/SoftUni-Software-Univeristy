function listProcessor(commands) {
    let innerCollection = [];
  
    for (let command of commands) {
      const [action, value] = command.split(' ');
  
      const actions = {
        add: (str) => innerCollection.push(str),
        remove: (str) => (innerCollection = innerCollection.filter((item) => item !== str)),
        print: () => console.log(innerCollection.join(',')),
      };
  
      if (actions[action]) {
        actions[action](value);
      }
    }
  }
  
  listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
  listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);
  