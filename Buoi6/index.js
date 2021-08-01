// // let input = [1,-8,5,7,2,-100,10]
// // let sum = 0


// // for(let i = 0;i<input.length;i++) {
// //     sum += input[i]
// // }

// // var n = parseInt(prompt('nhập số phần tử muốn thêm vào:'));
// // var arr =[1,2];

// // for(var k=0;k<n;k++){
// //  add = prompt('nhập phần tử muốn thêm:');
// //   arr.push(add);
// // }

// // console.log(arr);

// let a = {
//   user:[
//     {
//       msg:"Hi1",
//       timeStamp: 1
//     },
//     {
//       msg:"Hi2",
//       timeStamp: 3
//     },
//     {
//       msg:"Hi3",
//       timeStamp: 8
//     },
//     {
//       msg:"Hi4",
//       timeStamp: 22
//     },
//   ],
//   friends:[
//     {
//       msg:"Hello1",
//       timeStamp: 4,
//       other: true
//     },
//     {
//       msg:"Hello2",
//       timeStamp: 7,
//       other: true
//     },
//     {
//       msg:"Hello3",
//       timeStamp: 2,
//       other: true
//     },
//     {
//       msg:"Hello4",
//       timeStamp: 10,
//       other: true
//     },
//   ],
// }

// let mes = [...a.user,...a.friends];
// let sortedMes = mes.sort((a,b) => a.timeStamp - b.timeStamp)
// let listMes = document.getElementById("listMess")

// for(e of sortedMes) {
//   let tag 
//   if(e.other) {
//     tag =  `<li class="left">${e.msg}</li>`
//   }else {
//     tag =  `<li class="right">${e.msg}</li>`
//   }

//   listMes.innerHTML += tag
// }

const data = {
  d: [
    {
      id: 1,
      nameClass: "class1",
      qtySubject: 10,
      gradeDetail: [
        {
          subject: [
            {
              idSubject: 1,
              nameSubject: "subject1",
              detailSubject: [
                {
                  nickname: "nickname1",
                  chapter: [
                    {
                      nameChapter: "I: chapter1",
                    },
                    {
                      nameChapter: "II: chapter2",
                    },
                  ],
                },
                {
                  nickname: "nickname2",
                  chapter: [
                    {
                      nameChapter: "I: Chapter21",
                    },
                    {
                      nameChapter:
                        "II: chapter22",
                    },
                  ],
                },
              ],
            },
            {
              idSubject: 2,
              nameSubject: "subject2",
              detailSubject: [
                {
                  nickname: null,
                  chapter: [
                    {
                      nameChapter: "I: chapter 211",
                    },
                    {
                      nameChapter: "II: chapter234",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      nameClass: "class2",
      qtySubject: 120,
      gradeDetail: [
        {
          subject: [
            {
              idSubject: 121,
              nameSubject: "subject100",
              detailSubject: [
                {
                  nickname: "nickname20",
                  chapter: [
                    {
                      nameChapter: "I: chapter50",
                    },
                    {
                      nameChapter: "II: chapter51",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};


let a1 = data.d

for(let e1 of a1) {
    let a2 = e1.gradeDetail
    for(let e2 of a2) {
      let a3 = e2.subject
      for(let e3 of a3) {
        console.log(e3.idSubject,e3.nameSubject)
      }
    }
}