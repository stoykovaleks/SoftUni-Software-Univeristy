function objectManager() {
    const objects = {};
  
    return function (commands) {
      for (let command of commands) {
        const [action, name, ...rest] = command.split(' ');
  
        if (action === 'create') {
          if (rest[0] === 'inherit') {
            const parentName = rest[1];
            objects[name] = Object.create(objects[parentName]);
          } else {
            objects[name] = {};
          }
        } else if (action === 'set') {
          const key = rest[0];
          const value = rest[1];
          objects[name][key] = value;
        } else if (action === 'print') {
          const output = [];
          for (let key in objects[name]) {
            output.push(`${key}:${objects[name][key]}`); 
          }
          console.log(output.join(','));
        }
      }
    };
  }
  
  const execute = objectManager();
  
  execute([
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2',
  ]);
  