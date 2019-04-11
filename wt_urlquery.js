/* ===================================================
WT_URLQUERY

Returns value of URL variable

Variables:
  - qvar: Variable to lookup
=================================================== */
function wt_urlquery(qvar) {
  var qs = window.location.search.substring(1); // URL query string
  var qsList = []; // Query string list array
  var qsData = []; // Name & value pair array
  var qsI; // Loop index
  if (qs != "") {
    qsList = qs.split("&");
    for (qsI = 0; qsI < qsList.length; qsI++) {
      qsData = qsList[qsI].split("=");
      if (qsData[0] == qvar) {
        return qsData[1];
      }
    }
  }
}

/* ===================================================
WT_HASHQUERY

Returns URL hash value
=================================================== */
function wt_hashquery() {
  var hashValue = window.location.hash.substring(1);
  if (hashValue == "") { return undefined; }
  else { return hashValue; }
}

/* ===================================================
WT_ACTIVEPG

Returns filename of current page
=================================================== */
function wt_activepg() {
  var path = window.location.pathname;
  var filename = path.substring(path.lastIndexOf('/')+1);
  return filename;
}
