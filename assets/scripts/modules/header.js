const headerFlow = () => {
    const langBox = document.querySelector('.header__lang');
    if (langBox) {
        langBox.addEventListener('click', (e) => {
            e.stopPropagation();
            langBox.classList.toggle('show-box');
        });

        document.addEventListener('click', (e) => {
            if (!langBox.contains(e.target)) {
                langBox.classList.remove('show-box');
            }
        });
    }
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (header) {
            if (window.scrollY > 10) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });

    const headersSubMenu = () => {
        const headersItems = document.querySelectorAll('.js-open-menu');
        headersItems.forEach((item) => {
            item.addEventListener('click', () => {
                const isActive = item.classList.contains('show');
                headersItems.forEach((el) => el.classList.remove('show'));

                if (!isActive) {
                    item.classList.add('show');
                }
            });
        });

        document.addEventListener('click', (event) => {
            const clickedInside = [...headersItems].some((item) =>
                item.contains(event.target)
            );

            if (!clickedInside) {
                headersItems.forEach((item) => item.classList.remove('show'));
            }
        });
    };
    headersSubMenu();
};

export default headerFlow;
