function solve() {
  const inputText = document.getElementById("input").value;
  const outputDiv = document.getElementById("output");

  const sentences = inputText.split('.');

  const filteredSentences = sentences.filter(sentence => sentence.trim().length > 0);

  const paragraphs = [];
  for (let i = 0; i < filteredSentences.length; i += 3) {
    const paragraphText = filteredSentences.slice(i, i + 3).join('. ') + '.';
    const paragraph = `<p>${paragraphText}</p>`;
    paragraphs.push(paragraph);
  }
  outputDiv.innerHTML = paragraphs.join('');
}
