function initializeTyped() {
  let typed = new Typed('#typed', {
      stringsElement: '.typed-strings',
      typeSpeed: 100,
      startDelay: 500,
      backSpeed: 50,
      loop: true,
      loopCount: false,
      showCursor: false,
      attr: null,
      callback: function(){}
  });
}

// Вызываем функцию после загрузки документа
document.addEventListener('DOMContentLoaded', initializeTyped);