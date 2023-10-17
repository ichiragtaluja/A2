// Part 1: Dynamic site visitor data

const visitors = [
  { month: "April", visits: 1221 },
  { month: "May", visits: 2221 },
  { month: "June", visits: 2376 },
  { month: "July", visits: 6551 },
  { month: "August", visits: 8776 },
  { month: "September", visits: 9976 },
];

const visitorsSection = document.querySelector("#visitors-section");

if (visitorsSection) {
  const table = document.createElement("table");
  const tableRow = document.createElement("tr");
  table.appendChild(tableRow);

  const tableHeadMonth = document.createElement("th");
  tableHeadMonth.appendChild(document.createTextNode("Month"));
  const tableHeadVisits = document.createElement("th");
  tableHeadVisits.appendChild(document.createTextNode("Visits"));

  tableRow.appendChild(tableHeadMonth);
  tableRow.appendChild(tableHeadVisits);

  table.setAttribute("id", "visitors-table");

  visitorsSection.appendChild(table);

  for (let i = 0; i < visitors.length; i++) {
    const newTableRow = document.createElement("tr");
    const tableDataMonth = document.createElement("td");

    tableDataMonth.appendChild(document.createTextNode(visitors[i].month));
    const tableDataVisits = document.createElement("td");
    tableDataVisits.appendChild(document.createTextNode(visitors[i].visits));

    newTableRow.appendChild(tableDataMonth);
    newTableRow.appendChild(tableDataVisits);
    table.appendChild(newTableRow);
  }

  visitorsSection.appendChild(table);
}

// Part 2: GDPR

const cookies = document.querySelector("#cookies-banner");
if (cookies) {
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
}

// Part 3: Reading Assistance

let increaseContrast = false;

const changeContrastButton = document.querySelector("#change-contrast");

changeContrastButton.addEventListener("click", changeContrast);

function changeContrast() {
  const body = document.querySelector("body");
  if (!increaseContrast) {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    body.style.padding = "20px";
    body.style.lineHeight = "1.5";
    body.style.letterSpacing = "1px";
    increaseContrast = !increaseContrast;
    changeContrastButton.textContent = "Decrease Contrast";
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    body.style.padding = "10px";
    body.style.lineHeight = "normal";
    body.style.letterSpacing = "normal";
    increaseContrast = !increaseContrast;
    changeContrastButton.textContent = "Increase Contrast";
  }
}

// Part 4: Keyboard Shortcut

document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.key === "a") {
    changeContrast();
  }
});
