export default function Modules() {
    return (
      <div>
        {/* Implement Collapse All button, View Progress button, etc. */}
        <button id="wd-collapseall-btn">Collapse All</button>
        <button id="wd-viewprogress-btn">View Progress</button>
        <select name="Publish" id="wd-publish-select">
            <option value="Publish">Publish All</option>
        </select>
        <button id="wd-module-btn">+ Module</button>

        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 2</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">HTML Basics</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Understanding HTML structure</li>
                  <li className="wd-content-item">Working with headings, paragraph, and lists</li>
                  <li className="wd-content-item">Creating links and images</li>
                </ul>
              </li>
              <li className="wd-lesson">
              <span className="wd-title">CSS Basics</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to CSS and selectors</li>
                <li className="wd-content-item">Applying colors, fonts, and backgrounds</li>
                <li className="wd-content-item">Box model and spacing (margin, padding, border)</li>
              </ul>
            </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 3</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">JavaScript Basics</span>
                <ul className="wd-content">
                <li className="wd-content-item">Introduction to JavaScript and variables</li>
                <li className="wd-content-item">Functions, loops, and conditional statements</li>
                <li className="wd-content-item">Manipulating the DOM</li>
                </ul>
              </li>
              <li className="wd-lesson">
              <span className="wd-title">Project: Interactive Page</span>
              <ul className="wd-content">
                <li className="wd-content-item">Create a simple interactive webpage</li>
                <li className="wd-content-item">Add event listeners for button clicks</li>
                <li className="wd-content-item">Style dynamically using JS and CSS</li>
              </ul>
            </li>
            </ul>
          </li>
        </ul>
      </div>
  );}
  