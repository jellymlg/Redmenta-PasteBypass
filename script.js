new MutationObserver(mutations => {
    mutations.forEach((mutation) => {
        if(mutation.target.getAttribute("class") == "kif_t") {
            let x = mutation.target.parentElement, y = document.createRange().createContextualFragment(mutation.target.outerHTML).children.item(0);
            mutation.target.remove();
            y.setAttribute("style", "border: 3px solid green; background-color: rgba(0, 128, 0, 0.15);");
            x.appendChild(y);
        }
    });
}).observe(document, {attributes: true, childList: true, subtree: true});