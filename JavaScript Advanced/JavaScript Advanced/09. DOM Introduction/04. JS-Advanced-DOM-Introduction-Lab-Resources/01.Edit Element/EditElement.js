function editElement(ref, match, repl) {
    let content = ref.textContent;
    let matcher = new RegExp(match, "g");
    let edited = content.replace(matcher, repl);
    ref.textContent = edited;
}