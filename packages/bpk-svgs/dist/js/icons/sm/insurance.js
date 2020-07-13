import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M22.192 2.981a2.556 2.556 0 0 0-1.442-1.447 26.56 26.56 0 0 0-17.5 0 2.559 2.559 0 0 0-1.442 1.447A3.836 3.836 0 0 0 1.5 4.448v6.458a12.483 12.483 0 0 0 3.45 8.137 24.681 24.681 0 0 0 5.184 4.363 3.482 3.482 0 0 0 3.732 0 24.709 24.709 0 0 0 5.185-4.363 12.48 12.48 0 0 0 3.45-8.137V4.448a3.845 3.845 0 0 0-.309-1.467zM19.5 10.906a9.517 9.517 0 0 1-2.703 6.157 21.755 21.755 0 0 1-4.539 3.81.48.48 0 0 1-.258.075V3.052a23.349 23.349 0 0 1 7.47 1.213.687.687 0 0 1 .03.183z" /></svg>);