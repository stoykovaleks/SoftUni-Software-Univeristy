function articleToggler(articles) {
    let currentIndex = 0;
  
    return function () {
      const contentDiv = document.getElementById('content');

      if (currentIndex < articles.length) {
        const article = document.createElement('article');
        article.textContent = articles[currentIndex];
        contentDiv.appendChild(article);
        currentIndex++;
      }
    };
  }
  
  const articlesArray = ["Article 1", "Article 2", "Article 3"];
  const displayNextArticle = articleToggler(articlesArray);