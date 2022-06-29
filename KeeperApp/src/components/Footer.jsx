import React from "react";

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyrights reserved {year}</p>
    </footer>
  );
}

export default Footer;
