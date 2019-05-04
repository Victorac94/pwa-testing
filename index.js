document.addEventListener("DOMContentLoaded", event => {
  if (!('serviceWorker' in navigator)) {
    alert("SW not supported!");
     return console.log("service worker not supported");
  }
    let deferredPrompt;
    let addButton = document.querySelector(".addButton");

    navigator.serviceWorker.register("serviceWorker.js")
    .then(registration => {
      alert("SW registered!");
      console.log("SW registered! Scope is: " + registration.scope);
    });
    // Add to homescreen
    window.addEventListener("beforeinstallprompt", e => {
      alert("inside beforeinstallprompt");
      // Prevent Chrome 67 and older versions from prompting automatically
      e.preventDefault();
      deferredPrompt = e;
    });

    addButton.addEventListener("click", e => {
      alert("Clicked on addButton");
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(choiceResult => {
        if (choiceResult.outcome === 'accepted') {
          alert("Adding to Home Screen!");
        } else {
          alert("User denied adding to Home Screen");
        }
        deferredPrompt = null;
      });
    });

    // Confirming installation
    window.addEventListener("appinstalled", evt => {
      app.logEvent("a2hs", "installed");
      alert("Web App added to Home Screen");
    })
});
