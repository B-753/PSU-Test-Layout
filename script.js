const accordionHeaders = document.querySelectorAll(".profile-test-result"); //accordion-header
const accordionContents = document.querySelectorAll(".test-acrd"); // accordion-content

accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
        const accordionItem = header.parentElement;
        const accordionContent = accordionItem.querySelector(".test-acrd");
        accordionContent.classList.toggle("active"); 
    })
})