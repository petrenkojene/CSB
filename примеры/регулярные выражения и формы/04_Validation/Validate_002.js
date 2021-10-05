// регистрация события загрузки документа.
window.addEventListener("load", init, false);

// установка обработчиков для форм и элементов форм.
function init() {
    for (let i = 0; i < document.forms.length; i++) {
        let form = document.forms[i];

        let formValidation = false;

        for (let j = 0; j < form.elements.length; j++) {
            let e = form.elements[j];

            // пропускаем все что не поле ввода.
            if (e.type != "text") {
                continue;
            }

            // проверка имеются ли атрибуты требующие проверки.
            let pattern = e.getAttribute("data-val");
            // let pattern = e.dataset.val;

            if (pattern) {
                e.onchange = validateInput; // обработчик на изменение.
                formValidation = true; // форма требует проверку.
            }
        }
        if (formValidation) {
            form.onsubmit = validateForm; // установка обработчика для формы на submit
        }
    }
}

// обработчик на изменение содержимого полей ввода.
function validateInput() {
    let pattern = this.dataset.val,
        msg = this.dataset.valMsg,
        msgId = this.dataset.valMsgId,
        value = this.value;

    let res = value.search(pattern);
    if (res == -1) {
        document.getElementById(msgId).innerHTML = msg;
        this.className = "error";
    } else {
        document.getElementById(msgId).innerHTML = "";
        this.className = "valid";
    }
}

// обработчик на submit формы.
function validateForm() {

    let invalid = false;

    for (let i = 0; i < this.elements.length; ++i) {
        let e = this.elements[i];
        if (e.type == "text" && e.onchange != null) {
            e.onchange();
            if (e.className == "error") invalid = true;
        }
    }

    if (invalid) {
        alert("Допущены ошибки при заполнении формы.");
        return false;
    }
}