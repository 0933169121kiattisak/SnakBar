let toastBox = document.getElementById("toastBox");
let successMsg = `<i class="fa-solid fa-check"></i>SuccessFully submitted`;
let ErrorMsg = `<i class="fa-solid fa-xmark"></i>Please fix the error`;
let InvalidMsg = `<i class="fa-solid fa-exclamation"></i>Invalid input, check again`;

function showToast(msg) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes('error')){  
        toast.classList.add('error');
    }
    if(msg.includes('Invalid')){  
        toast.classList.add('invalid');
    }

    setTimeout(() => {
        toast.remove()
    }, 4000);

}