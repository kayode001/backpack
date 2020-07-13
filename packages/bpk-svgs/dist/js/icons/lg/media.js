import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M19 3H5a3.226 3.226 0 0 0-3 3v9a3.226 3.226 0 0 0 3 3h14a3.226 3.226 0 0 0 3-3V6a3.226 3.226 0 0 0-3-3zm-4.215 7.924l-4.138 3.008v-.001c-.287.192-.647-.047-.647-.431V7.499a.435.435 0 0 1 .647-.432l4.138 2.995a.54.54 0 0 1 0 .862zM18 20a1 1 0 0 1-1 1H7a1 1 0 0 1 0-2h10a1 1 0 0 1 1 1z" /></svg>);