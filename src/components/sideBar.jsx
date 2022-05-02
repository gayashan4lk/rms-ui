import React from 'react';

function SideBar() {
  return (
    <nav id="sidebar">
      <div className="sidebar-header">
        <h3>RMS - UI</h3>
      </div>
      <ul className="list-unstyled components">
        <p>dummy heading</p>
        <li>
          <a href="/candidates">Candidates</a>
        </li>
        <li>
          <a href="/interviews">Interviews</a>
        </li>
        <li>
          <a href="#a">Contact</a>
        </li>
        <li>
          <a
            href="#pageSubmenu"
            data-toggle="collapse"
            aria-expanded="false"
            className="dropdown-toggle"
          >
            Pages
          </a>
          <ul className="collapse list-unstyled" id="pageSubmenu">
            <li>
              <a href="#a">Page 1</a>
            </li>
            <li>
              <a href="#a">Page 2</a>
            </li>
            <li>
              <a href="#a">Page 3</a>
            </li>
          </ul>
        </li>
        <li className="active">
          <a
            href="#homesubmenu"
            data-toggle="collapse"
            aria-expanded="false"
            className="dropdown-toggle"
          >
            Home
          </a>
          <ul className="collapse list-unstyled" id="homesubmenu">
            <li>
              <a href="#a">Home 1</a>
            </li>
            <li>
              <a href="#a">Home 2</a>
            </li>
            <li>
              <a href="#a">Home 3</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;
