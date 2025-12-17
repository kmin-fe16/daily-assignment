//객체에 새 직원을 순서대로 추가할것
//원본(stafflist)를 바꾸지말고 spread로 새로운 객체 만들어 반환

// 새로 들어오는 직원이 받을 id
let newStaffId = 1004;

// key와 value로 나뉘어진 stafflist
// =>  배열 push 사용 불가 , 새로운 key 만들기
let staffList = {
  1000: { name: "최오즈", age: "42", phoneNumber: "010-2244-7462" },
  1001: { name: "이코딩", age: "29", phoneNumber: "010-2290-0292" },
  1002: { name: "이수열", age: "24", phoneNumber: "010-1248-1632" },
  1003: { name: "오콘솔", age: "24", phoneNumber: "010-3122-2203" },
};

// * 새로운 직원을 추가하여 새로운 직원 명단을 만드는 함수
// addnewstaff = 기존 stafflist + newstaffID(1004..) : newstaff 형태
// ...staffList(가져와서) +newstaffID : newstaff
// newstaff i만큼 반복

function addNewStaff(newStaff) {
  let newStaffList = { ...staffList };
}
for (let i = 0; i < newStaff.length; i++) {
  staffList = addNewStaff(staffList, newStaffId, newStaff[i]);
  newStaffId += 1;
}
// 여기에 코드를 작성해주세요.

return newStaffList;

// 새로 들어올 10명의 직원 정보
const newStaff = [
  { name: "오로그", age: "24", phoneNumber: "010-3122-2203" },
  { name: "김개발", age: "27", phoneNumber: "010-4721-1830" },
  { name: "이자스", age: "22", phoneNumber: "010-8354-6722" },
  { name: "박코딩", age: "25", phoneNumber: "010-9243-1567" },
  { name: "정디버그", age: "29", phoneNumber: "010-2417-8831" },
  { name: "최함수", age: "23", phoneNumber: "010-3820-4502" },
  { name: "한프론트", age: "26", phoneNumber: "010-9432-9120" },
  { name: "노자바", age: "21", phoneNumber: "010-6482-3305" },
  { name: "유인덱스", age: "28", phoneNumber: "010-5117-7614" },
  { name: "문서열", age: "24", phoneNumber: "010-1032-2841" },
];

// 10명의 직원이 들어올 때, 자동으로 새로운 직원 명단을 만드는 코드

// 여기에 코드를 작성해주세요.

console.log(staffList);
