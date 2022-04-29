document.getElementById("btn").addEventListener("click", function (e) {
  e.preventDefault();
});

function addComment(user) {
  const input = document.querySelector("#input-comment");
  const comment = input.value;

  if (input.value === "") {
    return;
  }

  const commentsContainer = document.getElementById("comments-container");
  const p = document.createElement("p");
  p.className = "comment";
  const span = document.createElement("span");
  p.textContent = " " + comment;
  span.textContent = user;
  p.prepend(span);

  commentsContainer.appendChild(p);

  input.value = "";
}

function handleLike() {
  const like = document.getElementById("like-icon");
  if (like.className === "like-icon-active") {
    like.className = "like-icon";
    like.src = "assets/svg/like.svg";
  } else {
    like.className = "like-icon-active";
    like.src = "assets/svg/likeActive.svg";
  }
}
