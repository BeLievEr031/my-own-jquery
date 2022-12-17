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
  collection.hide = (...args) => {
    collection.forEach((element) => {
      let time = args[0];
      let cb = args[1];

      if (args.length === 0) {
        element.style["display"] = "none";
        return;
      }

      if (typeof time === "function") {
        element.style["display"] = "none";
        args[0]();
        return;
      }

      if (typeof time === "number") {
        setTimeout(() => {
          element.style["display"] = "none";
          args.length < 2 ? "" : checkingForCB(cb);
        }, time);
      } else if (typeof time === "string") {
        if (time === "slow") {
          setTimeout(() => {
            element.style["display"] = "none";
            args.length < 2 ? "" : checkingForCB(cb);
          }, 1000);
        } else if (time === "fast") {
          setTimeout(() => {
            element.style["display"] = "none";
            args.length < 2 ? "" : checkingForCB(cb);
          }, 800);
        }
      }
    });
    return collection;
  };

  // show function
  collection.show = (...args) => {
    collection.forEach((element) => {
      let currStyle = window.getComputedStyle(element).display;
      let time = args[0];
      let cb = args[1];

      if (args.length === 0) {
        element.style["display"] = currStyle === "none" ? "" : "";
        return;
      }

      if (typeof time === "function") {
        element.style["display"] = currStyle === "none" ? "" : "";
        args[0]();
        return;
      }

      if (typeof time === "number") {
        setTimeout(() => {
          element.style["display"] = currStyle === "none" ? "" : "";
          args.length < 2 ? "" : checkingForCB(cb);
        }, time);
      } else if (typeof time === "string") {
        if (time === "slow") {
          setTimeout(() => {
            element.style["display"] = currStyle === "none" ? "" : "";
            args.length < 2 ? "" : checkingForCB(cb);
          }, 1000);
        } else if (time === "fast") {
          setTimeout(() => {
            element.style["display"] = currStyle === "none" ? "" : "";
            args.length < 2 ? "" : checkingForCB(cb);
          }, 800);
        }
      }
    });
    return collection;
  };

  // toggle function
  collection.toggle = (...args) => {
    collection.forEach((element) => {
      let currStyle = window.getComputedStyle(element).display;
      let time = args[0];
      let cb = args[1];

      if (args.length === 0) {
        element.style["display"] = currStyle === "none" ? "" : "none";
        return;
      }

      if (typeof time === "function") {
        element.style["display"] = currStyle === "none" ? "" : "none";
        args[0]();
        return;
      }

      if (typeof time === "number") {
        setTimeout(() => {
          element.style["display"] = currStyle === "none" ? "" : "none";
          args.length < 2 ? "" : checkingForCB(cb);
        }, time);
      } else if (typeof time === "string") {
        if (time === "slow") {
          setTimeout(() => {
            element.style["display"] = currStyle === "none" ? "" : "none";
            args.length < 2 ? "" : checkingForCB(cb);
          }, 1000);
        } else if (time === "fast") {
          setTimeout(() => {
            element.style["display"] = currStyle === "none" ? "" : "none";
            args.length < 2 ? "" : checkingForCB(cb);
          }, 800);
        }
      }
    });
    return collection;
  };
}



const checkingForCB = (cb) => {
  typeof cb === "function"
    ? cb()
    : console.error(
        `Invlaid argument getting ${typeof cb} instead of a function`
      );
};
