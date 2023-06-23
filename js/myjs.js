function callTopArrow(section) {
  alert("check" + section);
  switch (section) {
    case "skills":
      document.getElementById("projects").style.position = "";
      document.getElementById("skills").style.position = "relative";
      document.getElementById("myBtn").style.position = "absolute";

      let test = document.getElementById("myBtn");
      test.style.top = "35rem";
      test.style.right = "10px";
      break;

    case "projects":
      document.getElementById("skills").style.position = "";
      document.getElementById("projects").style.position = "relative";
      document.getElementById("myBtn").style.position = "absolute";
      let test2 = document.getElementById("myBtn");
      test2.style.top = "37rem";
      test2.style.right = "10px";
      break;

    case "default":
      document.getElementById("projects").style.position = "";
      document.getElementById("default-pos").style.position = "relative";
      document.getElementById("myBtn").style.position = "absolute";
      let defaultPosition = document.getElementById("myBtn");
      defaultPosition.style.top = "-4.5rem";
      defaultPosition.style.right = "0px";
      break;
    default:
      break;
  }
}
