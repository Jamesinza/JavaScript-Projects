const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

function convertMarkdown() {
  let text = markdownInput.value;

  text = text.replace(/^### (.+)$/gm, "<h3>$1</h3>");
  text = text.replace(/^## (.+)$/gm, "<h2>$1</h2>");
  text = text.replace(/^# (.+)$/gm, "<h1>$1</h1>");

  text = text.replace(/^> (.+)$/gm, "<blockquote>$1</blockquote>");

  text = text.replace(
    /!\[([^\]]+)\]\(([^)]+)\)/g,
    '<img alt="$1" src="$2">'
  );

  text = text.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2">$1</a>'
  );

  text = text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  text = text.replace(/__(.+?)__/g, "<strong>$1</strong>");

  text = text.replace(/\*(.+?)\*/g, "<em>$1</em>");
  text = text.replace(/_(.+?)_/g, "<em>$1</em>");

  return text.replace(/\n/g, "");
}

markdownInput.addEventListener("input", () => {
  const converted = convertMarkdown();
  htmlOutput.textContent = converted;
  preview.innerHTML = converted;
});
