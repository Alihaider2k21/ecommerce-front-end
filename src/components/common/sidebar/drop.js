export function dropActive(target, dropmenu_id) {
  let targetvalue = document.getElementById(target);
  let dropmenu = document.getElementById(dropmenu_id);
  console.log(dropmenu.classList);
  if (dropmenu.classList.value === "drop-menu") {
    console.log("It is working", dropmenu, targetvalue);
    dropmenu.classList.add("active");
  } else {
    dropmenu.classList.remove("active");
  }
}
