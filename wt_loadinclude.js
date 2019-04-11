/* ===================================================
WT_LOADINCLUDE

Loads JS or CSS file dynamically

Variables:
  - type: Type of file to include. Either "JS" or "CSS".
  - file: Path of file to include
=================================================== */
function wt_loadInclude(type, file) {
  switch(type) {
    case "js":
      var include = document.createElement("script");
      include.setAttribute("type", "text/javascript");
      include.setAttribute("src", file);
    break;
    case "css":
      var include = document.createElement("link");
      include.setAttribute("rel", "stylesheet");
      include.setAttribute("type", "text/css");
      include.setAttribute("href", file);
    break;
  }
  if (typeof include != "undefined") {
    document.getElementsByTagName("head")[0].appendChild(include);
  }
}
