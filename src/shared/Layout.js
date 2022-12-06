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
  margin: "1% auto",
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
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  maxWidth: "1200px",
  minWidth: "800px",
  padding: "1% 1% 1% 1%",
  margin: "0% auto",
  backgroundColor: "antiquewhite",
  boxShadow: "2% 2% 2% 2%",
};

const FooterTextStyle = {
  textAlign: "center",
};

const divStyle = {
  margin: "0 auto",
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
      <div style={{ ...divStyle }}>
        <h1 style={{ ...FooterTextStyle }}>푸터입니다만?!</h1>
      </div>
      <div style={{ ...divStyle }}>
        <h2 style={{ ...FooterTextStyle }}>최강 4조 조원들</h2>
        <h3 style={{ ...FooterTextStyle }}>🦊뗄레또비 나나준영😿</h3>
        <h3 style={{ ...FooterTextStyle }}>🦊빵빵터지는 최유정😿</h3>
        <h3 style={{ ...FooterTextStyle }}>🦊근본없는 김진영 😿</h3>
      </div>
    </section>
  );
}

export default Layout;
