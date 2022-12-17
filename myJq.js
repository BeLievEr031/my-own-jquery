const $ = (...args) => {
  if (typeof args[0] === "string") {
    let collection = document.querySelectorAll(args[0]);

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
    };

    // css function
    collection.css = (...args) => {
      if (typeof args[0] === "object") {
        collection.forEach((element) => {
          for (const [property, value] of Object.entries(args[0])) {
            element.style[property] = value;
          }
        });

        return;
      }

      let [property, value] = args;
      collection.forEach((element) => {
        element.style[property] = value;
      });
    };

    // hide function
    collection.hide = () => {
      collection.forEach((element) => {
        element.style["display"] = "none";
      });
    };

    // show function
    collection.show = () => {
      collection.forEach((element) => {
        element.style["display"] = "block";
      });
    };

    // toggle function
    collection.toggle = () => {
      collection.forEach((element) => {
        let currStyle = window.getComputedStyle(element).display;
        element.style["display"] = currStyle === "none" ? "" : "none";
      });
    };

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
