import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M7.402 14.714C6.855 14.882 6 14.426 6 13.86V3.568a1.557 1.557 0 0 1 .858-1.514 8.308 8.308 0 0 1 3.267-.554 10.496 10.496 0 0 1 4.125 1.071 10.484 10.484 0 0 0 4.125 1.072 9.248 9.248 0 0 0 2.723-.357c.547-.168 1.402.288 1.402.853v10.293a1.557 1.557 0 0 1-.858 1.514 8.308 8.308 0 0 1-3.267.554 10.496 10.496 0 0 1-4.125-1.071 10.484 10.484 0 0 0-4.125-1.072 9.248 9.248 0 0 0-2.723.357zM3 1.5A1.5 1.5 0 0 0 1.5 3v18a1.5 1.5 0 0 0 3 0V3A1.5 1.5 0 0 0 3 1.5z" /></svg>);