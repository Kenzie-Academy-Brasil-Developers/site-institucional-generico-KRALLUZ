function showModalButton(){
    const button = document.querySelector(".navBar--showModal");
    const modalContainer = document.querySelector(".modalContainer");

    button.addEventListener("click", () =>{
        modalContainer.showModal();

        closeModalButton();
    });
}

function closeModalButton(){
    const button = document.querySelector(".modal__closeButton");
    const modalContainer = document.querySelector(".modalContainer");

    button.addEventListener("click", () =>{
        modalContainer.close();
    });
}

showModalButton();