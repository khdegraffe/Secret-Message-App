const { hash } = window.location;

const hashContent = hash.replace("#", "");

if (hashContent) {
  try {
    const decodedHash = decodeURIComponent(hashContent);
    const message = atob(decodedHash);

    document.querySelector("#message-form").classList.add("hide");
    document.querySelector("#message-show").classList.remove("hide");

    document.querySelector("h1").innerHTML = message;
  } catch (error) {
    console.log("Failed to decode message:", error);
  }
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#link-form").classList.remove("hide");

  const input = document.querySelector("#message-input");
  const encrypted = btoa(input.value);

  const linkInput = document.querySelector("#link-input");
  linkInput.value = `${window.location.origin}${
    window.location.pathname
  }#${encodeURIComponent(encrypted)}`;
  linkInput.select();
});
