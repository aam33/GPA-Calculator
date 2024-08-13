var credits;
var value;
var UWGPA;
var rUWGPA;
var list = ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"];
function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}
onEvent("inputButton", "click", function() {
  calculateGPA();
  showWeight();
});
onEvent("mainScreen", "keydown", function(event){
  if(event.key == "Enter"){
  calculateGPA();
  showWeight();
  }
});
//maybe get rid of this function and put everything inside of the onEvent
function calculateGPA() {
  console.log("inputButton clicked!");
  Aplus();
  A();
  Aminus();
  Bplus();
  B();
  Bminus();
  Cplus();
  C();
  Cminus();
  Dplus();
  D();
  Dminus();
  F();
//credits variable is working correctly
  credits = parseInt(list[0], 10) + parseInt(list[1], 10) + parseInt(list[2], 10) + parseInt(list[3], 10) + parseInt(list[4], 10) + parseInt(list[5], 10) + parseInt(list[6], 10) + parseInt(list[7], 10) + parseInt(list[8], 10) + parseInt(list[9], 10) + parseInt(list[10], 10) + parseInt(list[11], 10) + parseInt(list[12], 10);
  console.log(credits);
//value variable works CORRECTLY (gives value of 186.6500)
  value = 4.33*list[0] + 4.00*list[1] + 3.67*list[2] + 3.33*list[3] + 3.00*list[4] + 2.67*list[5] + 2.33*list[6] + 2.00*list[7] + 1.67*list[8] + 1.33*list[9] + 1.00*list[10] + 0.67*list[11];
  showElement("GPA_label");
//UWGPA is correct
  UWGPA = value / credits;
  rUWGPA = round(UWGPA, 3);
  setText("GPA", rUWGPA);
  showElement("GPA");
}
var honor = 0;
var AP = 0;
var semester = 1;
var weight = 0;
var WGPA;
function showWeight() {
  honor = getText("honorsInput");
  AP = getText("APInput");
  semester = getText("semInput");
  weight = (0.096*honor + 0.143*AP)/semester;
  WGPA = UWGPA + weight;
  WGPA = round(WGPA, 6);
  WGPA = round(WGPA, 3);
  setText("WGPA", WGPA);
  showElement("WGPA_label");
  showElement("WGPA");
  if (semester === "") {
    hideElement("WGPA_label");
    hideElement("WGPA");
  } else if ((honor < 0 || AP < 0 || semester < 0)) {
    setText("WGPA", "Error");
  }
}
var exampleValue = 4.33+4*2+3.67*2+3.33*2+3+2.33;
var exampleCredits = 9;
var exGPA;
var exWGPA;
onEvent("exampleButton", "click", function() {
  setScreen("exampleScreen");
  exGPA = exampleValue/exampleCredits;
  console.log(exGPA);
  exWGPA = exGPA + (2*0.096);
  exGPA = round(exGPA, 3);
  console.log(exGPA);
  exWGPA = round(exWGPA, 3);
  console.log(exWGPA);
  setText("textLabel2", exGPA);
  setText("textLabel3", exWGPA);
});
function Aplus() {
 console.log("# of A+: " + getText("text_input1"));
  list[0] = getText("text_input1");
  if (list[0] === "") {
  setText("text_input1", "0");
  list[0] = 0;
  } else if (list[0] < 0) {
  list[0] = "Error";
  }
  setText("A+Label", list[0]);
  showElement("A+Label");
  console.log("list[0] " + list[0]); 
}
function A() {
  console.log("# of A: " + getText("text_input8"));
  list[1] = getText("text_input8");
  if (list[1] === "") {
  setText("text_input8", "0");
  list[1] = 0;
  } else if (list[1] < 0) {
  list[1] = "Error";
  }
  setText("ALabel", list[1]);
  showElement("ALabel");
  console.log("list[1] " + list[1]);
}
function Aminus() {
  console.log("# of A-: " + getText("text_input9"));
  list[2] = getText("text_input9");
  if (list[2] === "") {
  setText("text_input9", "0");
  list[2] = 0;
  } else if (list[2] < 0) {
  list[2] = "Error";
  }
  setText("A-Label", list[2]);
  showElement("A-Label");
  console.log("list[2] " + list[2]);
}
function Bplus() {
  console.log("# of B+: " + getText("text_input10"));
  list[3] = getText("text_input10");
  if (list[3] === "") {
  setText("text_input10", "0");
  list[3] = 0;
  } else if (list[3] < 0) {
  list[3] = "Error";
  }
  setText("B+Label", list[3]);
  showElement("B+Label");
  console.log("list[3] " + list[3]);
}
function B() {
  console.log("# of B: " + getText("text_input11"));
  list[4] = getText("text_input11");
  if (list[4] === "") {
  setText("text_input11", "0");
  list[4] = 0;
  } else if (list[4] < 0) {
  list[4] = "Error";
  }
  setText("BLabel", list[4]);
  showElement("BLabel");
  console.log("list[4] " + list[4]);
}
function Bminus() {
  console.log("# of B-: " + getText("text_input12"));
  list[5] = getText("text_input12");
  if (list[5] === "") {
  setText("text_input12", "0");
  list[5] = 0;
  } else if (list[5] < 0) {
  list[5] = "Error";
  }
  setText("B-Label", list[5]);
  showElement("B-Label");
  console.log("list[5] " + list[5]);
}
  function Cplus() {
  console.log("# of C+: " + getText("text_input13"));
  list[6] = getText("text_input13");
  if (list[6] === "") {
  setText("text_input13", "0");
  list[6] = 0;
  } else if (list[6] < 0) {
  list[6] = "Error";
  }
  setText("C+Label", list[6]);
  showElement("C+Label");
  console.log("list[6] " + list[6]);
}
function C () {
  console.log("# of C: " + getText("text_input14"));
  list[7] = getText("text_input14");
  if (list[7] === "") {
  setText("text_input14", "0");
  list[7] = 0;
  } else if (list[7] < 0) {
  list[7] = "Error";
  }
  setText("CLabel", list[7]);
  showElement("CLabel");
  console.log("list[7] " + list[7]);
}
function Cminus (){
  console.log("# of C-: " + getText("text_input15"));
  list[8] = getText("text_input15");
  if (list[8] === "") {
  setText("text_input15", "0");
  list[8] = 0;
  } else if (list[8] < 0) {
  list[8] = "Error";
  }
  setText("C-Label", list[8]);
  showElement("C-Label");
  console.log("list[8] " + list[8]);
}
function Dplus () {
  console.log("# of D+: " + getText("text_input16"));
  list[9] = getText("text_input16");
  if (list[9] === "") {
  setText("text_input16", "0");
  list[9] = 0;
  } else if (list[9] < 0) {
  list[9] = "Error";
  }
  setText("D+Label", list[9]);
  showElement("D+Label");
  console.log("list[9] " + list[9]);
}
function D () {
  console.log("# of D: " + getText("text_input17"));
  list[10] = getText("text_input17");
  if (list[10] === "") {
  setText("text_input17", "0");
  list[10] = 0;
  } else if (list[10] < 0) {
  list[10] = "Error";
  }
  setText("DLabel", list[10]);
  showElement("DLabel");
  console.log("list[10] " + list[10]);
}
function Dminus () {
  console.log("# of D-: " + getText("text_input18"));
  list[11] = getText("text_input18");
  if (list[11] === "") {
  setText("text_input18", "0");
  list[11] = 0;
  } else if (list[11] < 0) {
  list[11] = "Error";
  }
  setText("D-Label", list[11]);
  showElement("D-Label");
  console.log("list[11] " + list[11]);
}
function F () {
  console.log("# of F: " + getText("text_input20"));
  list[12] = getText("text_input20");
  if (list[12] === "") {
    setText("text_input20", "0");
    list[12] = 0;
  } else if (list[12] < 0) {
  list[12] = "Error";
  }
  setText("FLabel", list[12]);
  showElement("FLabel");
  console.log("list[12] " + list[12]);
}
onEvent("goBackButton", "click", function() {
  setScreen("mainScreen");
});
//function run does not work.
//incorrect GPA
//gets credit sum of 133
function run () {
  for (var i = 8; i < 19; i++) {
    for (var j = 1; j < 12; j++) {
    list[j] = getText("text_input"+i);
    if (list[j] === "") {
      setText("text_input"+i, "0");
      list[j] = 0;
    }
    setText("FLabel", list[j]);
    showElement("FLabel");
    console.log("list[12] " + list[j]);
  }
}
}
