console.log("connected");

const cookies = document.querySelector("#cookies-banner");

cookies.children[0].addEventListener("click", acceptOrRevokeCookies);

function acceptOrRevokeCookies(e) {
  if (e.target.id === "accept-cookies") {
    e.target.remove();
    const p = document.createElement("p");
    const a = document.createElement("a");
    const newBannerContent = document.createTextNode(
      "Cookies were accepted. Would you like to "
    );
    const revokeText = document.createTextNode("Revoke?");
    p.appendChild(newBannerContent);
    a.appendChild(revokeText);
    a.setAttribute("href", "#");
    a.setAttribute("id", "revoke-cookies");
    a.addEventListener("click", acceptOrRevokeCookies);
    p.appendChild(a);
    cookies.append(p);
  } else {
    e.target.parentElement.remove();
    const a = document.createElement("a");
    const cookiesText = document.createTextNode("Accept cookies");
    a.appendChild(cookiesText);
    a.setAttribute("href", "#");
    a.setAttribute("id", "accept-cookies");
    a.addEventListener("click", acceptOrRevokeCookies);
    cookies.appendChild(a);
  }
}
