let scope = "global scope";

function checkscope() {
    let scope = "local scope";

    function nested() {
        let scope = "nested scope";
        return scope;
    }

    return nested();
}

console.log(checkscope());

