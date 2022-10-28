import { useState } from "react";

function SelectItem({ title }) {
  let bag2 = [];
  let finalHtml = "";
  //   let str = "";
  //   str = str + title;

  console.log("selectItem", title);

  if (title != undefined) {
    runProgram(title);
  }

  function runProgram(input) {
    let bag = [];
    let head = [];
    let tail = [];
    let temp = 0;
    for (let i = 0; i < input.length; i++) {
      if (input[i] == "H") {
        if (tail.length != 0) {
          bag.push(tail);
          temp = Math.max(temp, tail.length);
          tail = [];
        }
        head.push(input[i]);
      } else if (input[i] == "T") {
        if (head.length != 0) {
          bag.push(head);
          temp = Math.max(temp, head.length);
          head = [];
        }
        tail.push(input[i]);
      }
    }
    if (head.length != 0) {
      bag.push(head);
      temp = Math.max(temp, head.length);
    }
    if (tail.length != 0) {
      bag.push(tail);
      temp = Math.max(temp, tail.length);
    }

    // console.log(temp)
    for (let i = 0; i < temp; i++) {
      let temp1 = [];

      for (let j = 0; j < bag.length; j++) {
        if (bag[j].length < i) {
          temp1.push();
        } else {
          temp1.push(bag[j][i]);
        }
      }
      bag2.push(temp1);
    }

    console.log("bag2: " + bag2.length);
    finalHtml += "<Table>";
    for (let i = 0; i < bag2.length; i++) {
      finalHtml += "<tr>";
      // console.log(bag2[i].join(' '))
      for (let j = 0; j < bag2[i].length; j++) {
        finalHtml =
          finalHtml +
          "<td>" +
          (bag2[i][j] == undefined ? " " : bag2[i][j]) +
          "</td>";
      }
      finalHtml += "</tr>";
    }
    finalHtml += "</Table>";
  }
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: finalHtml }} />
      {/* <p id={id}> </p> */}
    </>
  );
}

export default SelectItem;
