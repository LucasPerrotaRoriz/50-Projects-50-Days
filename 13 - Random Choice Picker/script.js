const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);
});

function createTags(input) {
  const tags = input
    .split(",")
    .filter((tags) => tags.trim() !== "")
    .map((tag) => tag.trim());

    tagsEl.innerHTML = ''

  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}
