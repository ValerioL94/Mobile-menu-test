const menu = (() => {
  function select() {
    const tabs = document.querySelectorAll('header>nav>a');
    tabs.forEach((tab) =>
      tab.addEventListener('click', () => {
        const selectedEL = document.querySelector('.selected');
        if (selectedEL) selectedEL.classList.remove('selected');
        tab.classList.add('selected');
      })
    );
  }
  return {
    select,
  };
})();

export default menu;
