new MutationObserver(mutations => {
    mutations.forEach((mutation) => {
        if(mutation.target.getAttribute("class") == "kif_t") {
            let x = document.getElementsByClassName("kif_t");
            for(let i = 0; i < x.length; i++) {
                console.log(x.item(i));
                x.item(i).outerHTML = x.item(i).outerHTML;
                x.item(i).style = "border: 3px solid green; background-color: rgba(0, 128, 0, 0.15);";
            }
        }
    });
}).observe(document, {childList: true, subtree: true});