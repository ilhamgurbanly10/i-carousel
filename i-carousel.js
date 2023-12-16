const iCarousel = () => {

    const carousels = document.querySelectorAll('.i-carousel');

    const carousel = (el) => {
        const items = el.querySelectorAll('.i-carousel-item');
        const prevArrow = el.querySelector('.i-carousel-prev');
        const nextArrow = el.querySelector('.i-carousel-next');
        const dots = el.querySelectorAll('.i-carousel-dots-dot');
        const length = items.length;
        const isInifinte = el.hasAttribute('i-infinite');
        let activeIndex = null;

        const setDatas = () => { 
            items.forEach((item, i) => { 
                item.setAttribute('data-index', i + 1);
                if (item.classList.contains('i-show')) activeIndex = i + 1;
                if (item.classList.contains('i-show') && i === 0 && !isInifinte && prevArrow) {
                    disablePrev();
                }
                if (item.classList.contains('i-show') && i + 1 === length && !isInifinte && nextArrow) {
                    disableNext();
                }
            })
            dots.forEach((dot, i) => { 
                dot.setAttribute('data-index', i + 1);
            })
        }

        const toItem = (dataIndex) => {
            items.forEach((item) => { 
                item.getAttribute('data-index') == dataIndex ? item.classList.add('i-show') : item.classList.remove('i-show');
            })
            activeIndex = dataIndex;
        }

        const toItemOnClickDot = (e) => {
            const i = Number(e.target.getAttribute('data-index'));
            toItem(i);
            activeDot(i);
            if (!isInifinte) {
                enableNext();
                enablePrev();
                if (i === length) disableNext();
                if (i === 1) disablePrev();
            }
        }

        const next = () => {
            const nextIndex = activeIndex < length ? activeIndex + 1 : 1;
            if (isInifinte) {
                toItem(nextIndex);
            } else if (!isInifinte) {
                enablePrev();
                if (nextIndex !== 1) toItem(nextIndex);
                if (nextIndex === length) disableNext();
            }
            if (dots) activeDot(nextIndex);
        }

        const prev = () => {
            const prevIndex = activeIndex > 1 ? activeIndex - 1 : length;
            if (isInifinte) {
                toItem(prevIndex);
            } else if (!isInifinte) {
                enableNext();
                if (prevIndex !== length) toItem(prevIndex);
                if (prevIndex === 1) disablePrev();
            }
            if (dots) activeDot(prevIndex);
        }

        const enablePrev = () => {
            prevArrow.classList.remove('i-disabled');
            prevArrow.removeAttribute('disabled');
        }

        const disablePrev = () => {
            prevArrow.classList.add('i-disabled');
            prevArrow.setAttribute('disabled', '');
        }

        const enableNext = () => {
            nextArrow.classList.remove('i-disabled');
            nextArrow.removeAttribute('disabled');
        }

        const disableNext = () => {
            nextArrow.classList.add('i-disabled');
            nextArrow.setAttribute('disabled', '');
        }

        const activeDot = (index) => {
            dots.forEach((dot) => { 
                index == dot.getAttribute('data-index') ? dot.classList.add('active') : dot.classList.remove('active');
            })
        }

        if (nextArrow) nextArrow.addEventListener('click', next);
        if (prevArrow) prevArrow.addEventListener('click', prev);
        if (dots) dots.forEach((dot) => {
            dot.addEventListener('click', toItemOnClickDot);
        })

        setDatas();
    }

    carousels.forEach((item) => { carousel(item); })
    

}

iCarousel();