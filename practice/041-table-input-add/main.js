let data = [{ username: "wanghuahua", address: "chengduongxinqu", balance: 18 }, { username: "zks", address: "chengbeidongqu", balance: 89 }, { username: "hubqu", address: "lianhuogaosu", balance: 100 }];
let table = document.querySelector("table");
let tbody = table.querySelector("tbody");
let form = document.querySelector("form")
let inputVerification={};

boot();
function boot() {
    read();
    submit();
}
function read() {
    data.forEach((it,index )=> {
        
       if(data[index]==null){
        return;
       }
       
       let tr = document.createElement("tr");
       let html = ``;
       for (let key in it) {
           html += `<td>${it[key]}</td>`
       }
       html += `<td><button class="remove">删除</button></td>`
       tr.innerHTML = html;
       tr.querySelector(".remove").addEventListener("click", () => {
           data[index]=null;
           tr.remove();
           console.log(data)
       })
       tbody.appendChild(tr);
    });
}

function obtainInput() {
    let inputs = form.querySelectorAll("[name]");
    tbody.innerHTML = ``;
    let valueObj = {}
    inputs.forEach(it => {
        valueObj[it.name] = it.value;
    });
    data.push(valueObj);
    read();
}
function submit() {
    let button = form.querySelector("button");
    button.addEventListener("click", () => {
        obtainInput();
    })
}
