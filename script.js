function basicCo() {
  var input = document.getElementById("noLOC").value;
  var E = Math.pow(input, 1.05) * 2.4;
  var D = Math.pow(E, 0.38) * 2.5;
  var P = E / D
  document.getElementById("orgMon").innerHTML = D.toFixed(2);
  document.getElementById("orgPpl").innerHTML = P.toFixed(0);

  var E = Math.pow(input, 1.12) * 3.0;
  var D = Math.pow(E, 0.35) * 2.5;
  var P = E / D
  document.getElementById("semMon").innerHTML = D.toFixed(2);
  document.getElementById("semPpl").innerHTML = P.toFixed(0);

  var E = Math.pow(input, 1.20) * 3.6;
  var D = Math.pow(E, 0.32) * 2.5;
  var P = E / D
  document.getElementById("embMon").innerHTML = D.toFixed(2);
  document.getElementById("embPpl").innerHTML = P.toFixed(0);
}


function cocomo2() {
  var input = document.getElementById("noLOC2").value;
  let option = Array.from(document.getElementsByName("news")).find(r => r.checked).value;
  if (option === "a") {
    var a = 3.2
    var b = 1.05
    var c = 2.5
    var d = 0.38
  } else if (option === "b") {
    var a = 3.0
    var b = 1.12
    var c = 2.5
    var d = 0.35
  } else if (option === "c") {
    var a = 2.8
    var b = 1.20
    var c = 2.5
    var d = 0.32
  }

  switch (Array.from(document.getElementsByName("a")).find(r => r.checked).value) {
    case "1":
      ratA = 0.75;
      break;
    case "2":
      ratA = 0.88;
      break;
    case "3":
      ratA = 1.00;
      break;
    case "4":
      ratA = 1.15;
      break;
    case "5":
      ratA = 1.40;
    case "6":
      ratA = 1;
      break;
  }

  switch (Array.from(document.getElementsByName("b")).find(r => r.checked).value) {
    case "1":
      ratB = 1;
      break;
    case "2":
      ratB = 0.94;
      break;
    case "3":
      ratB = 1.00;
      break;
    case "4":
      ratB = 1.08;
      break;
    case "5":
      ratB = 1.16;
      break;
    case "6":
      ratB = 1;
      break;
  }

  switch (Array.from(document.getElementsByName("c")).find(r => r.checked).value) {
    case "1":
      ratC = 0.70;
      break;
    case "2":
      ratC = 0.85;
      break;
    case "3":
      ratC = 1.00;
      break;
    case "4":
      ratC = 1.15;
      break;
    case "5":
      ratC = 1.30;
      break;
    case "6":
      ratC = 1.65;
      break;
  }

  switch (Array.from(document.getElementsByName("d")).find(r => r.checked).value) {
    case "1":
      ratD = 1;
      break;
    case "2":
      ratD = 1;
      break;
    case "3":
      ratD = 1.00;
      break;
    case "4":
      ratD = 1.11;
      break;
    case "5":
      ratD = 1.30;
      break;
    case "6":
      ratD = 1.66;
      break;
  }
  switch (Array.from(document.getElementsByName("e")).find(r => r.checked).value) {
    case "1":
      ratE = 1;
      break;
    case "2":
      ratE = 1;
      break;
    case "3":
      ratE = 1.00;
      break;
    case "4":
      ratE = 1.06;
      break;
    case "5":
      ratE = 1.21;
      break;
    case "6":
      ratE = 1.56;
      break;
  }
  switch (Array.from(document.getElementsByName("f")).find(r => r.checked).value) {
    case "1":
      ratF = 1;
      break;
    case "2":
      ratF = 0.87;
      break;
    case "3":
      ratF = 1.00;
      break;
    case "4":
      ratF = 1.15;
      break;
    case "5":
      ratF = 1.30;
      break;
    case "6":
      ratF = 1;
      break;
  }
  switch (Array.from(document.getElementsByName("g")).find(r => r.checked).value) {
    case "1":
      ratG = 1;
      break;
    case "2":
      ratG = 0.87;
      break;
    case "3":
      ratG = 1.00;
      break;
    case "4":
      ratG = 1.07;
      break;
    case "5":
      ratG = 1.15;
      break;
    case "6":
      ratG = 1;
      break;
  }
  switch (Array.from(document.getElementsByName("h")).find(r => r.checked).value) {
    case "1":
      ratH = 1.46;
      break;
    case "2":
      ratH = 1.19;
      break;
    case "3":
      ratH = 1.00;
      break;
    case "4":
      ratH = 0.86;
      break;
    case "5":
      ratH = 0.71;
      break;
    case "6":
      ratH = 1;
      break;
  }
  switch (Array.from(document.getElementsByName("i")).find(r => r.checked).value) {
    case "1":
      ratI = 1.29;
      break;
    case "2":
      ratI = 1.13;
      break;
    case "3":
      ratI = 1.00;
      break;
    case "4":
      ratI = 0.91;
      break;
    case "5":
      ratI = 0.82;
      break;
    case "6":
      ratI = 1;
      break;
  }
  switch (Array.from(document.getElementsByName("j")).find(r => r.checked).value) {
    case "1":
      ratJ = 1.42;
      break;
    case "2":
      ratJ = 1.17;
      break;
    case "3":
      ratJ = 1.00;
      break;
    case "4":
      ratJ = 0.86;
      break;
    case "5":
      ratJ = 0.70;
      break;
    case "6":
      ratJ = 1;
      break;
  }
  switch (Array.from(document.getElementsByName("k")).find(r => r.checked).value) {
    case "1":
      ratK = 1.21;
      break;
    case "2":
      ratK = 1.10;
      break;
    case "3":
      ratK = 1.00;
      break;
    case "4":
      ratK = 0.90;
      break;
    case "5":
      ratK = 1;
      break;
    case "6":
      ratK = 1;
      break;
  }
  switch (Array.from(document.getElementsByName("l")).find(r => r.checked).value) {
    case "1":
      ratL = 1.14;
      break;
    case "2":
      ratL = 1.07;
      break;
    case "3":
      ratL = 1.00;
      break;
    case "4":
      ratL = 0.95;
      break;
    case "5":
      ratL = 1;
      break;
    case "6":
      ratL = 1;
      break;
  }
  switch (Array.from(document.getElementsByName("m")).find(r => r.checked).value) {
    case "1":
      ratM = 1.24;
      break;
    case "2":
      ratM = 1.10;
      break;
    case "3":
      ratM = 1.00;
      break;
    case "4":
      ratM = 0.91;
      break;
    case "5":
      ratM = 0.82;
      break;
    case "6":
      ratM = 1;
      break;
  }
  switch (Array.from(document.getElementsByName("n")).find(r => r.checked).value) {
    case "1":
      ratN = 1.24;
      break;
    case "2":
      ratN = 1.10;
      break;
    case "3":
      ratN = 1.00;
      break;
    case "4":
      ratN = 0.91;
      break;
    case "5":
      ratN = 0.83;
      break;
    case "6":
      ratN = 1;
      break;
  }
  switch (Array.from(document.getElementsByName("o")).find(r => r.checked).value) {
    case "1":
      ratO = 1.23;
      break;
    case "2":
      ratO = 1.08;
      break;
    case "3":
      ratO = 1.00;
      break;
    case "4":
      ratO = 1.04;
      break;
    case "5":
      ratO = 1.10;
      break;
    case "6":
      ratO = 1;
      break;
  }
  var E = Math.pow(input, b) * a;
  var EAF = ratA * ratB * ratC * ratD * ratE * ratF * ratG * ratH * ratI * ratJ * ratK * ratL * ratM * ratN * ratO;
  var Effort = E * EAF;
  var Duration = Math.pow(Effort, d) * c;
  var People = Effort / Duration;
  document.getElementById("EAF").innerHTML = EAF.toFixed(4);
  document.getElementById("Effort").innerHTML = Effort.toFixed(4);
  document.getElementById("Duration").innerHTML = Duration.toFixed(4);
  document.getElementById("People").innerHTML = People.toFixed(0);

}

var theDI = [];

function cqm() {
  var LOC = document.getElementById("noLOC3").value;
  if (!LOC) {
    alert("plese enter KLOC!");
  } else {
    var arr1 = [];
    var arr2 = [];
    var arr3 = [];
    for (var i = 1; i <= 3; i++) {
      if (i == 1) arr = arr1
      else if (i == 2) arr = arr2
      else arr = arr3

      arr.push(Array.from(document.getElementsByName("rely" + i)).find(r => r.checked).value);
      arr.push(Array.from(document.getElementsByName("data" + i)).find(r => r.checked).value);
      arr.push(Array.from(document.getElementsByName("ruse" + i)).find(r => r.checked).value);
      arr.push(Array.from(document.getElementsByName("docu" + i)).find(r => r.checked).value);
      arr.push(Array.from(document.getElementsByName("cplx" + i)).find(r => r.checked).value);


      arr.push(Array.from(document.getElementsByName("time" + i)).find(r => r.checked).value);
      arr.push(Array.from(document.getElementsByName("stor" + i)).find(r => r.checked).value);
      arr.push(Array.from(document.getElementsByName("pvol" + i)).find(r => r.checked).value);


      arr.push(Array.from(document.getElementsByName("acap" + i)).find(r => r.checked).value);
      arr.push(Array.from(document.getElementsByName("pcap" + i)).find(r => r.checked).value);
      arr.push(Array.from(document.getElementsByName("aexp" + i)).find(r => r.checked).value);
      arr.push(Array.from(document.getElementsByName("pexp" + i)).find(r => r.checked).value);
      arr.push(Array.from(document.getElementsByName("ltex" + i)).find(r => r.checked).value);
      arr.push(Array.from(document.getElementsByName("pcon" + i)).find(r => r.checked).value);

      arr.push(Array.from(document.getElementsByName("tool" + i)).find(r => r.checked).value);
      arr.push(Array.from(document.getElementsByName("site" + i)).find(r => r.checked).value);
      arr.push(Array.from(document.getElementsByName("sced" + i)).find(r => r.checked).value);
      arr.push(Array.from(document.getElementsByName("disc" + i)).find(r => r.checked).value);
      arr.push(Array.from(document.getElementsByName("prec" + i)).find(r => r.checked).value);
      arr.push(Array.from(document.getElementsByName("resl" + i)).find(r => r.checked).value);
      arr.push(Array.from(document.getElementsByName("team" + i)).find(r => r.checked).value);
      arr.push(Array.from(document.getElementsByName("pmat" + i)).find(r => r.checked).value);
    }

    let a = 2.94;
    let b = 0.91;
    var DI = [1, 1, 1];
    var sum = 0;

    for (var i = 0; i < arr1.length; i++) {
      DI[0] *= arr1[i];
      DI[1] *= arr2[i];
      DI[2] *= arr3[i];
    }

    for (var i = 0; i < 3; i++) {
      theDI.push(a * (LOC ** b) * DI[i]);
      sum += (a * (LOC ** b) * DI[i]);
    }
    document.getElementById("DI").innerHTML = sum.toFixed(4);
  }
}

function cqm2() {
  var LOC = document.getElementById("noLOC3").value;
  if (!LOC) {
    alert("plese enter KLOC!");
  } else if(!theDI.length) {
    alert("please calculate DI first!")
  } else {

    var arr1 = [];
    var arr2 = [];
    var arr3 = [];
    var temp = ['auto', 'ppl', 'test'];

    for (var i = 1; i <= 3; i++) {
      if (i == 1) arr = arr1
      else if (i == 2) arr = arr2
      else arr = arr3
      for (var j = 0; j < temp.length; j++) {
        arr.push(1 - (Array.from(document.getElementsByName(temp[j] + i)).find(r => r.checked).value));
      }
    }

    var DR = [1, 1, 1];
    var sum = 0;

    for (var i = 0; i < arr1.length; i++) {
      DR[0] *= arr1[i];
      DR[1] *= arr2[i];
      DR[2] *= arr3[i];
    }

    for (var i = 0; i < 3; i++) {
      sum += (theDI[i] * DR[i]);
    }

    document.getElementById("DR").innerHTML = sum.toFixed(4);
  }
}


function co2co1() {
  var ObjPoint = document.getElementById("ObjPoint").value;
  var reuse = document.getElementById("reuse").value;
  
  switch (Array.from(document.getElementsByName("prod")).find(r => r.checked).value) {
    case "1":
      prod = 4;
      break;
    case "2":
      prod = 7;
      break;
    case "3":
      prod = 13;
      break;
    case "4":
      prod = 25;
      break;
    case "5":
      prod = 50;
      break;
  }
console.log(prod)
      var NOP = (ObjPoint-(100-reuse))/100;
      var PM = NOP/prod;
      document.getElementById("PM").innerHTML = PM.toFixed(4);
      document.getElementById("reuse").innerHTML = reuse.toFixed(4);
      document.getElementById("prod").innerHTML = prod.toFixed(4);

}

function co2co2() {
  var klocco2  = document.getElementById("klocco2").value;


  switch (Array.from(document.getElementsByName("a4")).find(r => r.checked).value) {
    case "1":
      a4 = 4.05;
      break;
    case "2":
      a4 = 3.24;
      break;
    case "3":
      a4 = 2.43;
      break;
    case "4":
      a4 = 1.62;
      break;
    case "5":
      a4 = 0.81;
      break;
    case "6":
      a4 = 0;
      break;
  }

  switch (Array.from(document.getElementsByName("b4")).find(r => r.checked).value) {
    case "1":
      b4 = 6.07;
      break;
    case "2":
      b4 = 4.86;
      break;
    case "3":
      b4 = 3.64;
      break;
    case "4":
      b4 = 2.43;
      break;
    case "5":
      b4 = 1.21;
      break;
    case "6":
      b4 = 0;
      break;
  }

  switch (Array.from(document.getElementsByName("c4")).find(r => r.checked).value) {
    case "1":
      c4 = 4.22;
      break;
    case "2":
      c4 = 3.38;
      break;
    case "3":
      c4 = 2.53;
      break;
    case "4":
      c4 = 1.69;
      break;
    case "5":
      c4 = 0.84;
      break;
    case "6":
      c4 = 0;
      break;
  }

  switch (Array.from(document.getElementsByName("d4")).find(r => r.checked).value) {
    case "1":
      d4 = 4.94;
      break;
    case "2":
      d4 = 3.95;
      break;
    case "3":
      d4 = 2.97;
      break;
    case "4":
      d4 = 1.98;
      break;
    case "5":
      d4 = 0.99;
      break;
    case "6":
      d4 = 0;
      break;
  }

  switch (Array.from(document.getElementsByName("e4")).find(r => r.checked).value) {
    case "1":
      e4 = 4.54;
      break;
    case "2":
      e4 = 3.64;
      break;
    case "3":
      e4 = 2.73;
      break;
    case "4":
      e4 = 1.82;
      break;
    case "5":
      e4 = 0.91;
      break;
    case "6":
      e4 = 0;
      break;
  }

  switch (Array.from(document.getElementsByName("a6")).find(r => r.checked).value) {
    case "0":
      a6 = 2.12;
      break;
    case "1":
      a6 = 1.62;
      break;
    case "2":
      a6 = 1.26;
      break;
    case "3":
      a6 = 1.00;
      break;
    case "4":
      a6 = 0.83;
      break;
    case "5":
      a6 = 0.63;
      break;
    case "6":
      a6 = 0.50;
      break;
  }
  switch (Array.from(document.getElementsByName("b6")).find(r => r.checked).value) {
    case "0":
      b6 = 0.49;
      break;
    case "1":
      b6 = 0.60;
      break;
    case "2":
      b6 = 0.83;
      break;
    case "3":
      b6 = 1.00;
      break;
    case "4":
      b6 = 1.33;
      break;
    case "5":
      b6 = 1.91;
      break;
    case "6":
      b6 = 2.72;
      break;
  }
  switch (Array.from(document.getElementsByName("c6")).find(r => r.checked).value) {
    case "2":
      c6 = 0.87;
      break;
    case "3":
      c6 = 1.00;
      break;
    case "4":
      c6 = 1.29;
      break;
    case "5":
      c6 = 1.81;
      break;
    case "6":
      c6 = 2.61;
      break;
  }
  switch (Array.from(document.getElementsByName("d6")).find(r => r.checked).value) {
    case "0":
      d6 = 1.59;
      break;
    case "1":
      d6 = 1.33;
      break;
    case "2":
      d6 = 1.12;
      break;
    case "3":
      d6 = 1.00;
      break;
    case "4":
      d6 = 0.87;
      break;
    case "5":
      d6 = 0.74;
      break;
    case "6":
      d6 = 0.62;
      break;
  }
  switch (Array.from(document.getElementsByName("e6")).find(r => r.checked).value) {
    case "0":
      e6 = 1.43;
      break;
    case "1":
      e6 = 1.30;
      break;
    case "2":
      e6 = 1.10;
      break;
    case "3":
      e6 = 1.00;
      break;
    case "4":
      e6 = 0.87;
      break;
    case "5":
      e6 = 0.73;
      break;
    case "6":
      e6 = 0.62;
      break;
  }
  switch (Array.from(document.getElementsByName("f6")).find(r => r.checked).value) {
    case "2":
      f6 = 0.95;
      break;
    case "3":
      f6 = 1.00;
      break;
    case "4":
      f6 = 1.07;
      break;
    case "5":
      f6 = 1.15;
      break;
    case "6":
      f6 = 1.24;
      break;
  }
  switch (Array.from(document.getElementsByName("g6")).find(r => r.checked).value) {
    case "1":
      g6 = 1.43;
      break;
    case "2":
      g6 = 1.14;
      break;
    case "3":
      g6 = 1.00;
      break;
    case "4":
      g6 = 1.00;
      break;
    case "5":
      g6 = 1.00;
      break;
  }

  var B = (a4+b4+c4+d4+e4)*0.01 + 1.01;
  var EM = a6*b6*c6*d6*e6*f6*g6;
  var PM2 = Math.pow(klocco2, B) * 2.5 * EM;
  document.getElementById("B").innerHTML = B.toFixed(4);
  document.getElementById("EM").innerHTML = EM.toFixed(4);
  document.getElementById("PM2").innerHTML = PM2.toFixed(4);
  console.log(PM2)
  
}


function co2co3() {
  var klocco3  = document.getElementById("klocco3").value;

  switch (Array.from(document.getElementsByName("a5")).find(r => r.checked).value) {
    case "1":
      a5 = 4.05;
      break;
    case "2":
      a5 = 3.24;
      break;
    case "3":
      a5 = 2.43;
      break;
    case "4":
      a5 = 1.62;
      break;
    case "5":
      a5 = 0.81;
      break;
    case "6":
      a5 = 0;
      break;
  }

  switch (Array.from(document.getElementsByName("b5")).find(r => r.checked).value) {
    case "1":
      b5 = 6.07;
      break;
    case "2":
      b5 = 4.86;
      break;
    case "3":
      b5 = 3.64;
      break;
    case "4":
      b5 = 2.43;
      break;
    case "5":
      b5 = 1.21;
      break;
    case "6":
      b5 = 0;
      break;
  }

  switch (Array.from(document.getElementsByName("c5")).find(r => r.checked).value) {
    case "1":
      c5 = 4.22;
      break;
    case "2":
      c5 = 3.38;
      break;
    case "3":
      c5 = 2.53;
      break;
    case "4":
      c5 = 1.69;
      break;
    case "5":
      c5 = 0.84;
      break;
    case "6":
      c5 = 0;
      break;
  }

  switch (Array.from(document.getElementsByName("d5")).find(r => r.checked).value) {
    case "1":
      d5 = 4.94;
      break;
    case "2":
      d5 = 3.95;
      break;
    case "3":
      d5 = 2.97;
      break;
    case "4":
      d5 = 1.98;
      break;
    case "5":
      d5 = 0.99;
      break;
    case "6":
      d5 = 0;
      break;
  }

  switch (Array.from(document.getElementsByName("e5")).find(r => r.checked).value) {
    case "1":
      e5 = 4.54;
      break;
    case "2":
      e5 = 3.64;
      break;
    case "3":
      e5 = 2.73;
      break;
    case "4":
      e5 = 1.82;
      break;
    case "5":
      e5 = 0.91;
      break;
    case "6":
      e5 = 0;
      break;
  }

  switch (Array.from(document.getElementsByName("a7")).find(r => r.checked).value) {
    case "1":
      a7 = 0.75;
      break;
    case "2":
      a7 = 0.88;
      break;
    case "3":
      a7 = 1.00;
      break;
    case "4":
      a7 = 1.15;
      break;
    case "5":
      a7 = 1.39;
      break;
  }
  switch (Array.from(document.getElementsByName("b7")).find(r => r.checked).value) {
    case "2":
      b7 = 0.93;
      break;
    case "3":
      b7 = 1.00;
      break;
    case "4":
      b7 = 1.09;
      break;
    case "5":
      b7 = 1.19;
      break;
  }
  switch (Array.from(document.getElementsByName("c7")).find(r => r.checked).value) {
    case "1":
      c7 = 0.75;
      break;
    case "2":
      c7 = 0.88;
      break;
    case "3":
      c7 = 1.00;
      break;
    case "4":
      c7 = 1.15;
      break;
    case "5":
      c7 = 1.30;
      break;
    case "6":
      c7 = 1.66;
      break;
  }
  switch (Array.from(document.getElementsByName("d7")).find(r => r.checked).value) {
    case "2":
      d7 = 0.91;
      break;
    case "3":
      d7 = 1.00;
      break;
    case "4":
      d7 = 1.14;
      break;
    case "5":
      d7 = 1.29;
      break;
    case "6":
      d7 = 1.49;
      break;
  }
  switch (Array.from(document.getElementsByName("e7")).find(r => r.checked).value) {
    case "1":
      e7 = 0.89;
      break;
    case "2":
      e7 = 0.95;
      break;
    case "3":
      e7 = 1.00;
      break;
    case "4":
      e7 = 1.06;
      break;
    case "5":
      e7 = 1.13;
      break;
  }
  switch (Array.from(document.getElementsByName("f7")).find(r => r.checked).value) {
    case "3":
      f7 = 1.00;
      break;
    case "4":
      f7 = 1.11;
      break;
    case "5":
      f7 = 1.31;
      break;
    case "6":
      f7 = 1.67;
      break;
  }
  switch (Array.from(document.getElementsByName("g7")).find(r => r.checked).value) {
    case "3":
      g7 = 1.00;
      break;
    case "4":
      g7 = 1.06;
      break;
    case "5":
      g7 = 1.21;
      break;
    case "6":
      g7 = 1.57;
      break;
  }
  switch (Array.from(document.getElementsByName("h7")).find(r => r.checked).value) {
    case "2":
      h7 = 0.87;
      break;
    case "3":
      h7 = 1.00;
      break;
    case "4":
      h7 = 1.15;
      break;
    case "5":
      h7 = 1.30;
      break;
  }
  switch (Array.from(document.getElementsByName("i7")).find(r => r.checked).value) {
    case "1":
      i7 = 1.50;
      break;
    case "2":
      i7 = 1.22;
      break;
    case "3":
      i7 = 1.00;
      break;
    case "4":
      i7 = 0.83;
      break;
    case "5":
      i7 = 0.67;
      break;
  }
  switch (Array.from(document.getElementsByName("j7")).find(r => r.checked).value) {
    case "1":
      j7 = 1.37;
      break;
    case "2":
      j7 = 1.16;
      break;
    case "3":
      j7 = 1.00;
      break;
    case "4":
      j7 = 0.87;
      break;
    case "5":
      j7 = 0.74;
      break;
  }
  switch (Array.from(document.getElementsByName("k7")).find(r => r.checked).value) {
    case "1":
      k7 = 1.24;
      break;
    case "2":
      k7 = 1.10;
      break;
    case "3":
      k7 = 1.00;
      break;
    case "4":
      k7 = 0.92;
      break;
    case "5":
      k7 = 0.84;
      break;
  }
  switch (Array.from(document.getElementsByName("l7")).find(r => r.checked).value) {
    case "1":
      l7 = 1.22;
      break;
    case "2":
      l7 = 1.10;
      break;
    case "3":
      l7 = 1.00;
      break;
    case "4":
      l7 = 0.89;
      break;
    case "5":
      l7 = 0.81;
      break;
  }
  switch (Array.from(document.getElementsByName("m7")).find(r => r.checked).value) {
    case "1":
      m7 = 1.25;
      break;
    case "2":
      m7 = 1.12;
      break;
    case "3":
      m7 = 1.00;
      break;
    case "4":
      m7 = 0.88;
      break;
    case "5":
      m7 = 0.81;
      break;
  }
  switch (Array.from(document.getElementsByName("n7")).find(r => r.checked).value) {
    case "1":
      n7 = 1.22;
      break;
    case "2":
      n7 = 1.10;
      break;
    case "3":
      n7 = 1.00;
      break;
    case "4":
      n7 = 0.91;
      break;
    case "5":
      n7 = 0.84;
      break;
  }
  switch (Array.from(document.getElementsByName("o7")).find(r => r.checked).value) {
    case "1":
      o7 = 1.24;
      break;
    case "2":
      o7 = 1.12;
      break;
    case "3":
      o7 = 1.00;
      break;
    case "4":
      o7 = 0.86;
      break;
    case "5":
      o7 = 0.72;
      break;
  }
  switch (Array.from(document.getElementsByName("p7")).find(r => r.checked).value) {
    case "1":
      p7 = 1.25;
      break;
    case "2":
      p7 = 1.10;
      break;
    case "3":
      p7 = 1.00;
      break;
    case "4":
      p7 = 0.92;
      break;
    case "5":
      p7 = 0.84;
      break;
    case "7":
      p7 = 0.78;
      break;
  }
  switch (Array.from(document.getElementsByName("q7")).find(r => r.checked).value) {
    case "1":
      q7 = 1.29;
      break;
    case "2":
      q7 = 1.10;
      break;
    case "3":
      q7 = 1.00;
      break;
    case "4":
      q7 = 1.00;
      break;
    case "5":
      q7 = 1.00;
      break;
  }
  var B3 = (a5+b5+c5+d5+e5)*0.01 + 1.01;
  console.log(B3)
  var EM3 = a7*b7*c7*d7*e7*f7*g7*h7*i7*j7*k7*l7*m7*n7*o7*p7*q7;
  var PM3 = Math.pow(klocco3, B3) * 2.5 * EM3;
  document.getElementById("B3").innerHTML = B3.toFixed(4);
  document.getElementById("EM3").innerHTML = EM3.toFixed(4);
  document.getElementById("PM3").innerHTML = PM3.toFixed(4);
  
}