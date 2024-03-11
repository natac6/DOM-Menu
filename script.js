var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" }
    ]
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" }
    ]
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" }
    ]
  }
];

// Task 1.0
// Select and cache the <main>element in a variable named mainEl

const mainEl = document.querySelector("main");

// Task 1.1
// Set the background color of mainEl to the value stored in the --main-bgCSS custom property.
// Hint: Assign a string that uses the CSS var()function like this:
// 'var(--main-bg)'

mainEl.style.backgroundColor = "var(--main-bg)";

// Task 1.2
// Set the content of mainEl to <h1>SEI Rocks!</h1>.
const h1 = document.createElement("h1");
mainEl.appendChild(h1);
h1.textContent = "SEI Rocks!";

// Task 1.3
// Add a class of flex-ctr to mainEl.

mainEl.classList = "flex-ctr";

// Task 2.0
// Select and cache the <nav id="top-menu">element in a variable named topMenuEl.

const topMenuEl = document.getElementById("top-menu");

// Task 2.1
// Set the height topMenuElelement to be 100%.

topMenuEl.style.height = "100%";

// Task 2.2
// Set the background color of topMenuElto the value stored in the --top-menu-bg CSS custom property.

topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// Task 2.3
// Add a class of flex-around to topMenuEl.

topMenuEl.classList = "flex-around";

// Task 3.1
// Iterate over the entire menuLinksarray and for each "link" object:

// Create an <a> element.
// On the new element, add an href attribute with its value set to the href property of the "link" object.
// Set the new element's content to the value of the textproperty of the "link" object.
// Append the new element to the topMenuElelement.

for (let link of menuLinks) {
  const a = document.createElement("a");
  a.setAttribute("href", link.href);
  a.textContent = link.text;
  topMenuEl.appendChild(a);
}

// Task 4.0
// Select and cache the <nav id="sub-menu">element in a variable named subMenuEl.

const subMenuEl = document.getElementById("sub-menu");

// Task 4.1
// Set the height subMenuElelement to be 100%.

subMenuEl.style.height = "100%";

// Task 4.2
// Set the background color of subMenuElto the value stored in the --sub-menu-bgCSS custom property.

subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// Task 4.3
// Add the class of flex-around to the subMenuElelement.

subMenuEl.classList = "subMenuElement";

// Task 4.4
// Set the CSS position property of subMenuElto the value of absolute.

subMenuEl.style.position = "absolute";

// Task 4.5
// Set the CSS top property of subMenuElto the value of 0.

subMenuEl.style.top = "0";

// Task 5.1
// Select and cache the all of the <a>elements inside of topMenuEl in a variable named topMenuLinks.

const topMenuLinks = topMenuEl.querySelectorAll("a");

// Declare a global showingSubMenu variable and initialize it to false;

let showingSubMenu = false;

// Task 5.2
// Attach a delegated 'click' event listener to topMenuEl.

// The first line of code of the event listener function should call the event object's preventDefault()method.

// The second line of code function should immediately return if the element clicked was not an <a>element.

// console.logthe content of the <a>to verify the handler is working.

topMenuEl.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.tagName !== "A") {
    return;
  }
  console.log(event.target.textContent);
  // Task 5.3
  // Next in the event listener, if the clicked <a>link has a class of active:

  // Remove the active class from the clicked <a>element.
  // Set the showingSubMenuto false.
  // Set the CSS topproperty of subMenuElto 0.
  // return to exit the handler.
  // the one that was clickes is active
  if (event.target.classList.contains("active")) {
    event.target.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    return;
  }
  // Task 5.4
  // Next, the event listener should remove a class name of activefrom each <a>element in topMenuLinks- whether the activeclass exists or not.
  // remove active from anything else so its swapping
  // Hint: Removing a non-existent class from an element does not cause an error, so just remove it!
  topMenuLinks.forEach(function (link) {
    link.classList.remove("active");
  });
  // Task 5.5
  // Next, the event listener should add a class name of activeto the <a>element that was clicked.
  event.target.classList.add("active");
  // Task 5.6
  // Set showingSubMenu to true if the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), otherwise, set it to false.
  // Hint: Saving the "link" object in a variable will come in handy for passing its subLinks array in Task 5.7
  const linkObject = menuLinks.find(function (linkObj) {
    return linkObj.text === event.target.textContent;
  });

  if (linkObject && linkObject.subLinks) {
    showingSubMenu = true;
  } else {
    showingSubMenu = false;
    // Task 6.4
    // If the ABOUT link is clicked, an <h1>about</h1>should be displayed.
    h1.textContent = event.target.textContent;
  }

  // PUTTING FUNCTION BEFORE IS NEEDED
  // Task 5.8
  // Code the buildSubMenufunction so that it:

  // Clears the contents of subMenuEl.
  // Iterates over the subLinksarray passed as an argument; and for each "link" object:

  // Create an <a>element.
  // On the new element, add an hrefattribute with its value set to the hrefproperty of the "link" object.
  // Set the new element's content to the value of the textproperty of the "link" object.
  // Append the new element to the subMenuElelement.

  function buildSubMenu(array) {
    subMenuEl.innerHTML = "";
    for (let link of array) {
      const a = document.createElement("a");
      a.setAttribute("href", link.href);
      a.textContent = link.text;
      subMenuEl.appendChild(a);
    }
  }
  // Task 5.7
  // Next in the event listener...
  // If showingSubMenuis true:
  // Call a buildSubMenufunction passing to it the subLinks array for the clicked <a>element.
  // Set the CSS topproperty of subMenuElto 100%.

  if (showingSubMenu) {
    buildSubMenu(linkObject.subLinks);
    subMenuEl.style.top = "100%";
  } else {
    // Otherwise (showingSubMenuis false):
    // Set the CSS topproperty of subMenuElto 0.
    subMenuEl.style.top = "0";
  }
});

// Task 6.0
// Attach a delegated 'click' event listener to subMenuEl.

subMenuEl.addEventListener("click", function (event) {
  // The first line of code of the event listener function should call the event object's preventDefault()method.
  event.preventDefault();
  // The second line of code function should immediately return if the element clicked was not an <a>element.
  if (event.target.tagName !== "A") {
    return;
  }
  // console.logthe content of the <a>to verify the handler is working.
  console.log(event.target.textContent);
  // Task 6.1
  // Next, the event listener should:

  // Set showingSubMenuto false.
  event.target.showingSubMenu = false;
  // Set the CSS topproperty of subMenuElto 0.
  event.target.style.top = "0";
  // Task 6.2
  // Remove the class name of active from each <a>element in topMenuLinks- whether the active class exists or not.
  topMenuLinks.forEach(function (link) {
    link.classList.remove("active");
  });
  // Task 6.3
  // Update the contents of mainElto the contents of the <a>element, within an <h1>, clicked within subMenuEl
  h1.textContent = event.target.textContent;
});
