(() => {
    // Создаем объект с ссылками на элементы управления модальным окном
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"), // Кнопка для открытия модального окна
        closeModalBtn: document.querySelector("[data-modal-close]"), // Кнопка для закрытия модального окна
        modal: document.querySelector("[data-modal]"), // Само модальное окно
    };

    // Добавляем обработчик события "click" на кнопку открытия модального окна
    refs.openModalBtn.addEventListener("click", toggleModal);

    // Добавляем обработчик события "click" на кнопку закрытия модального окна
    refs.closeModalBtn.addEventListener("click", toggleModal);

    // Функция для открытия/закрытия модального окна
    function toggleModal() {
        // Переключаем класс "modal-open" на элементе <body>, чтобы, например, запретить скролл страницы
        document.body.classList.toggle("modal-open");

        // Переключаем класс "is-open" у модального окна для его отображения/скрытия
        refs.modal.classList.toggle("is-open");
    }
})();
