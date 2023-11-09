function getArgumentsInfo() {
    const argumentsMap = {};
  
    for (let arg of arguments) {
      const argType = typeof arg;
      if (argumentsMap[argType] === undefined) {
        argumentsMap[argType] = [];
      }
      argumentsMap[argType].push(arg);
    }
  
    const argumentTypes = Object.keys(argumentsMap);
    argumentTypes.sort((a, b) => argumentsMap[b].length - argumentsMap[a].length);
  
    for (let argType of argumentTypes) {
      console.log(`${argType}: ${argumentsMap[argType].join(', ')}`);
    }
  
    for (let argType of argumentTypes) {
      console.log(`${argType} = ${argumentsMap[argType].length}`);
    }
  }
  
  getArgumentsInfo('cat', 42, function () {
    console.log('Hello world!');
  });
  