function solution(command) {
    if (command === 'score') {
      const obfuscationThreshold = 50;
      const { upvotes, downvotes } = this;
      let obfuscationFactor = Math.ceil(0.25 * Math.max(upvotes, downvotes));
  
      let positiveVotes = upvotes;
      let negativeVotes = downvotes;
  
      if (upvotes + downvotes > obfuscationThreshold) {
        positiveVotes += obfuscationFactor;
        negativeVotes += obfuscationFactor;
      }
  
      let balance = positiveVotes - negativeVotes;
  
      let rating = 'new';
      if (upvotes + downvotes >= 10) {
        if (balance > 0 && (upvotes / (upvotes + downvotes) > 2 / 3)) {
          rating = 'hot';
        } else if (balance >= 0) {
          rating = 'controversial';
        } else if (balance < 0) {
          rating = 'unpopular';
        }
      }
  
      return [positiveVotes, negativeVotes, balance, rating];
    } else if (command === 'upvote') {
      this.upvotes++;
    } else if (command === 'downvote') {
      this.downvotes++;
    }
  }
  
  let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
  };
  
  solution.call(post, 'upvote');
  solution.call(post, 'downvote');
  let score = solution.call(post, 'score');
  solution.call(post, 'downvote');
  score = solution.call(post, 'score');