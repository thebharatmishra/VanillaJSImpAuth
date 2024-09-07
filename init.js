const auth = new Auth();

document.querySelector(".logut").addEventListener("click", (e) => {
  auth.logOut();
});
