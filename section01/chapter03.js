// 1. 단락평가
function returnFalse() {
    console.log("False 함수");
    return false;
}

function returnTrue() {
    console.log("True 함수");
    return true;
}

// console.log(returnFalse() && returnTrue());
// console.log(returnTrue() || returnFalse());

// 2. 단락평가 활용 사례
function printName(person) {
//     if (!person) {
//         console.log("person에 값이 없음");
//         return;
//     }
    const name = person && person.name;
    console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "황규범" });