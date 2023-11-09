function fibonacci() {
    let current = 0;
    let next = 1;
  
    function generateNextFib() {
      let newFib = current + next;
      current = next;
      next = newFib;
      return current;
    }
  
    return generateNextFib;
  }