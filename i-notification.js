const iNotification = (type = 'success', title, mes, position = 'top-right', icon, time) => {

    const defaultTime = 3000;
    const containerClasses = {
        'top-left': 'i-notification-container-top-left',
        'top-right': 'i-notification-container-top-right',
        'bottom-left': 'i-notification-container-bottom-left',
        'bottom-right': 'i-notification-container-bottom-right'
    }

    const types = {
        success: {
            title: 'Success title',
            mes: 'Success message',
            icon: '<svg viewBox="64 64 896 896" focusable="false" data-icon="check-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg>'
        },
        info: {
            title: 'Info title',
            mes: 'Info message',
            icon: '<svg viewBox="64 64 896 896" focusable="false" data-icon="info-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path></svg>'
        },
        error: {
            title: 'Error title',
            mes: 'Error message',
            icon: '<svg fill-rule="evenodd" viewBox="64 64 896 896" focusable="false" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm128.01 198.83c.03 0 .05.01.09.06l45.02 45.01a.2.2 0 01.05.09.12.12 0 010 .07c0 .02-.01.04-.05.08L557.25 512l127.87 127.86a.27.27 0 01.05.06v.02a.12.12 0 010 .07c0 .03-.01.05-.05.09l-45.02 45.02a.2.2 0 01-.09.05.12.12 0 01-.07 0c-.02 0-.04-.01-.08-.05L512 557.25 384.14 685.12c-.04.04-.06.05-.08.05a.12.12 0 01-.07 0c-.03 0-.05-.01-.09-.05l-45.02-45.02a.2.2 0 01-.05-.09.12.12 0 010-.07c0-.02.01-.04.06-.08L466.75 512 338.88 384.14a.27.27 0 01-.05-.06l-.01-.02a.12.12 0 010-.07c0-.03.01-.05.05-.09l45.02-45.02a.2.2 0 01.09-.05.12.12 0 01.07 0c.02 0 .04.01.08.06L512 466.75l127.86-127.86c.04-.05.06-.06.08-.06a.12.12 0 01.07 0z"></path></svg>'
        },
        warning: {
            title: 'Warning title',
            mes: 'Warning message',
            icon: '<svg viewBox="64 64 896 896" focusable="false" data-icon="warning" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M464 720a48 48 0 1096 0 48 48 0 10-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z"></path></svg>'
        }
    }

    const createContainer = () => {
        const container = document.createElement('div');
        container.className = `i-notification-container ${containerClasses[position]}`;
        document.body.appendChild(container);
        return container;
    } 

    const createNotification = () => {
        let container = document.querySelector(`.${containerClasses[position]}`);
        if (!container) container = createContainer();
        container.appendChild(getNotification());
    }

    const getNotification  = () => {
        const notification = document.createElement('div');
        notification.className = `i-notification i-notification-${type}`;
        const head =  document.createElement('div');
        head.className = 'i-notification-head';
        const _icon =  document.createElement('div');
        _icon.className = 'i-notification-icon';
        _icon.innerHTML = icon ? icon : types[type]?.icon;
        const _title =  document.createElement('h3');
        _title.className = 'i-notification-title';
        _title.innerHTML = title ? title : types[type]?.title;
        head.appendChild(_icon);
        head.appendChild(_title);
        const body =  document.createElement('div');
        body.className = 'i-notification-body';
        const _mes =  document.createElement('p');
        _mes.className = 'i-notification-mes';
        _mes.innerHTML = mes ? mes : types[type]?.mes;
        body.appendChild(_mes);

        const hide = () => {
            notification.classList.remove('i-notification-show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }

        const close =  document.createElement('button');
        close.type = "button";
        close.className = 'i-notification-close';
        close.addEventListener('click', hide)
        close.innerHTML = '<svg fill-rule="evenodd" viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"></path></svg>'

        notification.appendChild(head);
        notification.appendChild(body);
        notification.appendChild(close);
        
        setTimeout(() => {
            notification.classList.add('i-notification-show')
        }, 100);
        let timeout = setTimeout(() => {
           hide();
        }, time ? time + 100 : defaultTime + 100);

        notification.addEventListener('mouseenter', () => {
            clearInterval(timeout);
        })

        notification.addEventListener('mouseleave', () => {
            timeout = setTimeout(() => {
                hide();
            }, time ? time + 100 : defaultTime + 100);
        })
        return notification;
    }

    createNotification();

}