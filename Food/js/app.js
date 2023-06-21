const tabs = document.querySelectorAll('.tabheader__item')
const tabsParent = document.querySelector('.tabheader__items')
const tabContent = document.querySelectorAll('.tabcontent')
let tabCounter = 0
const hideTabContent = () => {
    tabContent.forEach(item => {
        item.style.display = 'none'
    })
    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active')
    })
}
const showTabContent = (i = 0) => {
    tabContent[i].style.display = 'block'
    tabs[i].classList.add('tabheader__item_active')
}
hideTabContent()
showTabContent()

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tabheader__item')) {
        tabs.forEach((item, i) => {
            if (event.target === item) {
                hideTabContent()
                showTabContent(i)
                tabCounter = i
            }
        })
    }
}


//todo
    const switchTabs = () => {
      hideTabContent()
      showTabContent(tabCounter)
      tabCounter++
      if (tabCounter >= tabs.length) {
        tabCounter = 0
      }
    }
    setInterval(switchTabs, 2500)


    const modal = document.querySelector('.modal')
    const modalTrigger = document.querySelector('.btn_white')
    const closeModalBtn = document.querySelector('.modal__close')
    const secondModalTrigger = document.querySelector('.btn_dark')
    const openModal = () => {
      setTimeout(() => {
        modal.classList.add('show')
        modal.classList.remove('hide')
        document.body.style.overflow = 'hidden'
      }, 1000)
    }
    const closeModal = () => {
      modal.classList.add('hide')
      modal.classList.remove('show')
      document.body.style.overflow = ''
    }

    modalTrigger.onclick = () => openModal()
    secondModalTrigger.onclick = () => openModal()
    closeModalBtn.onclick = () => closeModal()

    modal.onclick = (event) => (event.target === modal ? closeModal() : false)
    modal.onkeydown = (event) => event.code === 'Escape' ? closeModal() : false

    window.addEventListener("scroll", () => {
      const sP = window.scrollY + window.innerHeight
      const sH = document.body.scrollHeight
      if (sP >= sH) {
        openModal()
      }
    })
    window.onload = function () {
      setInterval(function () {
        openModal()
      }, 50000)
    }
