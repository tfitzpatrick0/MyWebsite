/** @jsxImportSource @emotion/react */
import "./style.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="projects.html">Projects</a>
        </li>
        <li>
          <a href="about.html">About</a>
        </li>
        <li>
          <a href="contact.html">Contact</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/tfitzpatrick3/">
            <span class="fab fa-linkedin" aria-hidden="true"></span>
            <span class="sr-only">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/tfitzpatrick0">
            <span class="fab fa-github-square" aria-hidden="true"></span>
            <span class="sr-only">Github</span>
          </a>
        </li>
        <li>
          <a
            href="https://engine.mybookie.ag/sports/home?first_page=1"
            class="button"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
