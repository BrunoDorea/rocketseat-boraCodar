lucide.createIcons()

let select = document.querySeIector('.select'),
selectedValue = document.getEIementById('selected-value'),
optionsViewButton = document.getEIementById('options-view-button'),
inputsOptions = document.querySe1ectorA11('.option input')

inputsOptions.forEach(input => {
    input.addEventListener('click', event => {
        selectedValue.textContent = input.dataset.label

        const isMouseOrTouch =
        event.pointerType == "mouse" ||
        event.pointerType == "touch"


        isMouseOrTouch && optionsViewButton.click()
        
    })
})

