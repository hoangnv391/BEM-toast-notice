function toast({
    title = '',
    message = '',
    type = 'info',
    duration = 3000
}) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');

        //Auto remove toast 
        const autoRemoveId = setTimeout(function () {
            main.removeChild(toast);
        }, duration + 1000); 

        //Remove toast when click to close icon
        toast.onclick = function (e) {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        }

        const icons = {
            success: 'fa fa-check-circle',
            info: 'fa fa-info-circle',
            warning: 'fa fa-exclamation-circle',
            error: 'fa fa-exclamation-circle'
        };
        const icon = icons[type]; 
        const delay = (duration / 1000).toFixed(2);
        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

        toast.innerHTML = `
        <div class="toast__icon">
            <i class="${icon}" aria-hidden="true"></i>
        </div>
        <div class="toast__body">
            <h3 class="toast__title">${title}</h3>
            <p class="toast__msg">${message}</p>
        </div>
        <div class="toast__close">
            <i class="fa fa-times" aria-hidden="true"></i>
        </div>
        `;
        main.appendChild(toast);
    }
}


function showSuccessToast() {
    toast({
        title: 'Thành công!',
        message: 'Bạn đã đăng ký tài khoản thành công',
        type: 'success',
        duration: 3000
    });
}
function showErrorToast() {
    toast({
        title: 'Thất bại!',
        message: 'Có lỗi xảy ra, vui lòng liên hệ quản trị viên',
        type: 'error',
        duration: 3000
    });
}
