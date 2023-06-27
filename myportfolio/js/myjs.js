function callTopArrow(section) {
  if (section === "skills") {
    document.getElementById("projects").style.position = "";
    document.getElementById("hobby").style.position = "";
    document.getElementById("exp").style.position = "";
    document.getElementById("edu").style.position = "";
    document.getElementById("skills").style.position = "relative";
    document.getElementById("myBtn").style.position = "absolute";

    let test = document.getElementById("myBtn");
    test.style.top = "35rem";
    test.style.right = "1.5rem";
  } else if (section === "projects") {
    document.getElementById("skills").style.position = "";
    document.getElementById("hobby").style.position = "";
    document.getElementById("exp").style.position = "";
    document.getElementById("edu").style.position = "";
    document.getElementById("projects").style.position = "relative";
    document.getElementById("myBtn").style.position = "absolute";
    let test2 = document.getElementById("myBtn");
    test2.style.top = "38rem";
    test2.style.right = "1.5rem";
  }
  else if (section === "edu") {
    document.getElementById("skills").style.position = "";
    document.getElementById("projects").style.position = "";
    document.getElementById("myBtn").style.position = "";
    document.getElementById("hobby").style.position = "";
    document.getElementById("edu").style.position = "relative";
    document.getElementById("myBtn").style.position = "absolute";
    let test3 = document.getElementById("myBtn");
    test3.style.top = "96rem";
    test3.style.right = "1.5rem";
  } 
 
  else if (section === "exp") {
    document.getElementById("skills").style.position = "";
    document.getElementById("projects").style.position = "";
    document.getElementById("hobby").style.position = "";
    document.getElementById("edu").style.position = "";
    document.getElementById("exp").style.position = "relative";
    document.getElementById("myBtn").style.position = "absolute";
    let test5 = document.getElementById("myBtn");
    test5.style.top = "108rem";
    test5.style.right = "1.5rem";
  }
  else if (section === "hobby") {
    document.getElementById("skills").style.position = "";
    document.getElementById("projects").style.position = "";
    document.getElementById("exp").style.position = "";
    document.getElementById("edu").style.position = "";
    document.getElementById("hobby").style.position = "relative";
    document.getElementById("myBtn").style.position = "absolute";
    let test6 = document.getElementById("myBtn");
    test6.style.top = "124rem";
    test6.style.right = "1.5rem";
  } else {
    document.getElementById("projects").style.position = "";
    document.getElementById("skills").style.position = "";
    document.getElementById("default-pos").style.position = "";
    document.getElementById("myBtn").style.position = "";
    let defaultPosition = document.getElementById("myBtn");
    defaultPosition.style.top = "0px";
    defaultPosition.style.right = "0px";
  }
}
