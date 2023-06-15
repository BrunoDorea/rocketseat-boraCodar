let currentStep = 0
const formStep = document.querySelectorAll('.form-step')
const form = document.querySelector('form')

// steps
form.addEventListener('click', (e) => {
    if (!e.target.matches('[data-action]')) {
        return
    }

    const actions = {
        next() {
            if(!isValidInputs()) { return }
            currentStep++
        },
        prev() {
            currentStep--
        }
    }
    const action = e.target.dataset.action
    actions[action]()

    updateActiveStep()
    updateProgressStep()
})

// envio do formulário
form.addEventListener('submit', (e) => {
    e.preventDefault()
})

// update steps
function updateActiveStep() {
    formStep.forEach(step => step.classList.remove('active'))
    formStep[currentStep].classList.add('active')
}

const progressStep = document.querySelectorAll('.step-progress [data-step]')
function updateProgressStep() {
    progressStep.forEach((step, idx) => {
        step.classList.remove('active')
        step.classList.remove('done')

        if (idx < currentStep + 1) {
            step.classList.add('active')
        }

        if (idx < currentStep) {
            step.classList.add('done')
        }
    })
}

// validation
function isValidInputs() {
    const currentFormStep = formSteps[currentStep]
    const formFields = [...currentFormStep.querySelectorAll('input'), currentFormStep.querySelectorAll('textarea')]

    return formFields.every((input) => input.reportValidity())
}