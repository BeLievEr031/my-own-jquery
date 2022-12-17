const $ = (...args) => {
  if (typeof args[0] === "string") {
    let collection = document.querySelectorAll(args[0]);
    allFunctionsContainer(collection);
    return collection;
  } else if (args[0] instanceof HTMLElement) {
    let collection = [args[0]];
    allFunctionsContainer(collection);
    return collection;
  } else if (typeof args[0] === "function" || typeof args[0] === "object") {
    if (typeof args[0] === "object") {
      document.ready = (handlerFunc) => {
        document.addEventListener("DOMContentLoaded", handlerFunc);
      };
      return document;
    }
    document.addEventListener("DOMContentLoaded", args[0]);
  }
};

function allFunctionsContainer(collection) {
  // click function
  collection.click = (clickedFunc) => {
    collection.forEach((element) => {
      element.addEventListener("click", clickedFunc);
    });
  };

  // on function
  collection.on = (eventName, handlerFunc) => {
    collection.forEach((element) => {
      element.addEventListener(eventName, handlerFunc);
    });
    return collection;
  };

  // css function
  collection.css = (...args) => {
    if (typeof args[0] === "object") {
      collection.forEach((element) => {
        for (const [property, value] of Object.entries(args[0])) {
          element.style[property] = value;
        }
      });

      return collection;
    }

    let [property, value] = args;
    collection.forEach((element) => {
      element.style[property] = value;
    });

    return collection;
  };

  // hide function
  collection.hide = (...timeArgs) => {
    collection.forEach((element) => {
      let time = timeArgs[0];
      if (typeof time === "number") {
        setTimeout(() => {
          element.style["display"] = "none";
        }, time);
      } else {
      }

      return collection;
    });
  };

  // show function
  collection.show = () => {
    collection.forEach((element) => {
      element.style["display"] = "block";
    });
    return collection;
  };

  // toggle function
  collection.toggle = () => {
    collection.forEach((element) => {
      let currStyle = window.getComputedStyle(element).display;
      element.style["display"] = currStyle === "none" ? "" : "none";
    });
    return collection;
  };
}
