window.inputData={
    getInputData,
    setInputData,
}
/**
 * 获得ｉｎｐｕｔ的值　注入ｄａｔａ对象
 * @param {HTMLFormElement} form 选好的form元素
 * @returns data　获取到的ｉｎｐｕｔ存为对象
 */
function getInputData(form) {
    let data = {};
    let inputs = form.querySelectorAll("[name]");
    inputs.forEach(it => {
        switch (it.type) {
            case "radio":
                if (!it.checked) {
                    return
                } else {
                    data[it.name] = it.value;
                }
                break;
            case "checkbox":
                if (!Array.isArray(data[it.name])) {
                    data[it.name] = [];
                }
                if (it.checked) {
                    data[it.name].push(it.value)
                }
                break

            case 'date':
            case "time":
            case "week":
            case "month":
            case "datetime":
            case "datetime-local":
                data[it.name] = it.valueAsDate;
                break;
            default:
                data[it.name] = it.value;
                break;
        }
    })
    return data;
}
/**
 *将ｄａｔａ对象填写到ｉｎｐｕｔ中
 * @param {Object} data　
 * @param {HTMLFormElement} form 选中的form元素
 */
function setInputData(data,form){
    for (let key in data) {
        // 先获取每个name为data　key的input
        let input = form.querySelector(`[name=${key}]`);
        // 判断ｉｎｐｕｔ 的类型
        switch (input.type) {
            case "radio":
                console.log(key)
                let radio = form.querySelector(`[name=${key}][value=${data[key]}]`)
                if (radio) {
                    radio.checked = true;
                }
                break;
            case "checkbox":
                console.log(data[key])
                data[key].forEach(it => {
                    let checkbox = form.querySelector(`[name=${key}][value=${it}]`);
                    if (checkbox) {
                        checkbox.checked = true;
                    }
                });
                break;
        }
        input.value = data[key];
    }
}