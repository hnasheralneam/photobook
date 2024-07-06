function scrollToImage(button, direction) {
    let element = button.parentElement;

    let nextChild = direction == "next" ? element.nextElementSibling : element.previousElementSibling;
    console.log(nextChild)
  
    if (!nextChild) {
        let imageContainer = element.parentElement;
        nextChild = direction == "next" ? imageContainer.firstElementChild : imageContainer.lastElementChild;
        console.log(nextChild)
    }


    
  
    nextChild.scrollIntoView({ behavior: "smooth" });
  }
  