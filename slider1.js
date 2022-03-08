var before = document.getElementById("before");
var after = document.getElementById("after");
var doc = document.getElementById("document");
var count = 0;
var docs = [
  "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quas laborum minus voluptates at sed molestiae, ut doloremque consectetur. Velit.",

  "dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum nisi quis",

  "turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan",

  "eget dolor morbi non arcu risus quis varius quam quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem",
];
doc.innerText = docs[count];
after.addEventListener("click", () => {
  if (count <= 3) {
    doc.innerText = docs[count];
    count++;
    if (count == 4) {
      count = 0;
    }
  }
});
before.addEventListener("click", () => {
  if (count <= 3) {
    doc.innerText = docs[count];
    count = count - 1;
  }
  if (count == -1) {
    count = 3;
  }
});
