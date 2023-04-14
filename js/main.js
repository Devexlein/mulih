// табы 
const tabsButtons = document.querySelectorAll('.tabs__nav button');
const tabsItems = document.querySelectorAll('.tabs__content-item');

// скрывает табы и убирает класс active у кнопок
function hideTabs() {
   tabsItems.forEach(item => item.classList.add("hide"));
   tabsButtons.forEach(item => item.classList.remove("active"));
}

// показывает переданный индекс таба и делает его кнопку активной
function showTab(index) {
   tabsItems[index].classList.remove("hide");
   tabsButtons[index].classList.add("active");
}

hideTabs();
showTab(0);

tabsButtons.forEach((button, index) => button.addEventListener("click", () => {
   hideTabs();
   showTab(index);
}));