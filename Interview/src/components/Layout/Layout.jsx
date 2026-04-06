import React from "react";
import { Outlet } from "react-router-dom";
import "./Layout.css";

function Layout() {
  return (
    <div className="layout">
      {/* HEADER */}
      <header className="header">
        <div className="logo"> AI Mock Interview</div>
        <nav className="nav">
          <span className="nav-item"> Home</span>
          <span className="nav-item">Features</span>
          <span className="nav-item">Contact</span>
        </nav>
        <button className="header-btn"> Start Practice</button>
      </header>

      {/* MAIN CONTENT */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 AI Mock Interview</p>
      </footer>
    </div>
  );
}

export default Layout;