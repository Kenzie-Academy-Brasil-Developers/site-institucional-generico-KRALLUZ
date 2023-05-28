function showModalButton(){
    const button = document.querySelector(".showModal");
    const modalContainer = document.querySelector(".modalContainer");

    button.addEventListener("click", () =>{
        modalContainer.showModal();

        closeModalButton();
    });
}

function closeModalButton(){
    const button = document.querySelector(".closeModal");
    const modalContainer = document.querySelector(".modalContainer");

    button.addEventListener("click", () =>{
        modalContainer.close();
    });
}

showModalButton();