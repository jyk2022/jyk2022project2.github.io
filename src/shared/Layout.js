import React from "react";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

const HeaderStyles = {
  display: "flex",
  flexDirection: "row",
  flexWrap: " wrap",
  width: "100%",
  border: "none",
  margin: "2% auto",
  backgroundColor: "antiquewhite",
  borderRadius: "50px 50px 50px 50px",
  boxShadow: "2% 2% 2% 2%",
  padding: "1% 1% 1% 1%",
  maxWidth: "1200px",
  minWidth: "800px",
};

const Logo = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
};

const FooterStyles = {
  width: "100%",
  maxWidth: "1200px",
  minWidth: "800px",
  padding: "1% 1% 1% 1%",
  margin: "2% auto",
  backgroundColor: "antiquewhite",
  boxShadow: "2% 2% 2% 2%",
};

const FooterTextStyle = {
  textAlign: "center",
};

function Header() {
  return (
    <section style={{ ...HeaderStyles }}>
      <div style={{ ...Logo }}>
        <h2>👸리액트 숙련하기👸</h2>
        <h2>MY TodoList</h2>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <section style={{ ...FooterStyles }}>
      <h2 style={{ ...FooterTextStyle }}> 🦊푸터 입니다😿</h2>
    </section>
  );
}

export default Layout;
