/* ===================================================
WT_MAXHEIGHT

Resizes image container to maximum size without
exceeding available space.

Variables:
  - divID: ID name of container to be resized
  - imageWidth: Natural width of image
  - imageHeight: Natural height of image
  - xOffset (optional)*: Space to subtract from browser inner-width.
  - yOffset (optional)*: Space to subtract from browser inner-height.

  * For x or y offsets, add 4 to prevent browser
    scrollbars from displaying
=================================================== */
function wt_maxheight(divID,imageWidth,imageHeight,xOffset,yOffset) {
  // Initialize image width & height
  var iWidth = imageWidth,
      iHeight = imageHeight,
      iWidthNew,
      iHeightNew;
  // Get browser inner width & height. IE8 & earlier uses clientWidth/clientHeight.
  var bWidth = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
  var bHeight = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
  // Subtract offset if provided
  if (typeof xOffset !== "undefined" && xOffset !== null && isNaN(xOffset) == false) {
    bWidth = bWidth - xOffset;
  }
  if (typeof yOffset !== "undefined" && yOffset !== null && isNaN(yOffset) == false) {
    bHeight = bHeight - yOffset;
  }
  // Calculate appropriate image dimensions based on available browser space
  iWidthNew = (bHeight*iWidth)/iHeight;
  if (iWidthNew > bWidth) {
    iHeightNew = (bWidth*iHeight)/iWidth;
  } else {
    iHeightNew = bHeight;
  }
  // Resize image container to appropriate height
  document.getElementById(divID).style.height = iHeightNew+"px";
  // Return calculated image height
  return iHeightNew;
}

/* ===================================================
WT_GETOFFSET

Calculates offset from divs taking horizontal &
vertical space. Uses help from JQuery to get element's
width or height.

JQuery 2.2.4 dependencies:
  .outerWidth() - Gets element outer width
  .outerHeight() - Gets element outer height

Variables:
  - axis: Calculate offset for either "horizontal"
          or "vertical"
  - list: Comma-delimited list of div names to
          calculate offset from
=================================================== */
function wt_getoffset(axis,list) {
  if (typeof jQuery !== 'undefined') {
    var divName,
        offset = 0,
        divSpace = 0,
        i;
    switch(axis) {
      // Calculate horizontal offset
      case "horizontal":
        var xArray = list.split(",");
        for (i = 0; i < xArray.length; i++) {
          divName = xArray[i];
          divSpace = $(divName).outerWidth(true);
          offset = offset+divSpace;
        }
        return offset;
        break;
      // Calculate vertical offset
      case "vertical":
        var yArray = list.split(",");
        for (i = 0; i < yArray.length; i++) {
          divName = yArray[i];
          divSpace = $(divName).outerHeight(true);
          offset = offset+divSpace;
        }
        return offset;
        break;
    }
  } else {
    alert("Error loading JQuery")
  }
}
