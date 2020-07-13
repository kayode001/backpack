import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M1.5 8.98a1.77 1.77 0 0 1 .798-1.598L4.62 6.25a16.434 16.434 0 0 1 14.758 0l2.323 1.132A1.77 1.77 0 0 1 22.5 8.98v1.895a6.925 6.925 0 0 0-5.09.232l-1.05.468A2.341 2.341 0 0 0 15 13.722v.528a.75.75 0 0 0 1.5 0v-.527a.843.843 0 0 1 .471-.777l1.05-.468a5.43 5.43 0 0 1 4.457 0l1.05.468a.842.842 0 0 1 .472.777V16.5a3 3 0 0 1-3 3H3.002a3 3 0 0 1-3-3v-2.777a.843.843 0 0 1 .47-.777l1.05-.468a5.43 5.43 0 0 1 4.457 0l1.05.468a.842.842 0 0 1 .472.777v.527a.75.75 0 1 0 1.5 0v-.527a2.341 2.341 0 0 0-1.36-2.147l-1.05-.468a6.925 6.925 0 0 0-5.09-.232z" /></svg>);