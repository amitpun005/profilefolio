function callTopArrow(section) {
  if (section === "skills") {
    alert("check" + section);
    document.getElementById("projects").style.position = "";
    document.getElementById("skills").style.position = "relative";
    document.getElementById("myBtn").style.position = "absolute";

    let test = document.getElementById("myBtn");
    test.style.top = "35rem";
    test.style.right = "10px";
  } else if (section === "projects") {
    alert("check" + section);
    document.getElementById("skills").style.position = "";
    document.getElementById("projects").style.position = "relative";
    document.getElementById("myBtn").style.position = "absolute";
    let test2 = document.getElementById("myBtn");
    test2.style.top = "38rem";
    test2.style.right = "10px";
  } else if (section === "defaults") {
    alert("check" + section);
    document.getElementById("skills").style.position = "";
    document.getElementById("projects").style.position = "";
    document.getElementById("myBtn").style.position = "";
    let test3 = document.getElementById("myBtn");
    test3.style.top = "";
    test3.style.right = "10px";
  } else {
    alert("check" + section);
    document.getElementById("projects").style.position = "";
    document.getElementById("skills").style.position = "";
    document.getElementById("default-pos").style.position = "";
    document.getElementById("myBtn").style.position = "";
    let defaultPosition = document.getElementById("myBtn");
    defaultPosition.style.top = "0px";
    defaultPosition.style.right = "0px";
  }
}
