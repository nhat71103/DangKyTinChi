import React, { useState } from "react";
import './Homepage.css';

const Homepage = () => {
  const [expanded, setExpanded] = useState({});

  const toggleAccordion = (index) => {
    setExpanded(prevState => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const expandAll = () => {
    setExpanded({
      0: true,
      1: true,
      2: true,
      3: true,
    });
  };

  return (
    <div className="Homepage">
      <h1>Quá trình thực tập </h1>

      <div className="section-content">
        <h2 className="section-title">Tìm hiểu và làm quen với công ty</h2>
      </div>

      <div className="section-content">
        <h2 className="section-title">Nội dung thực tập</h2>
        <div className="expand-all" onClick={expandAll}>Mở rộng tất cả</div>

        {[ 
          { title: "Tuần 1. Tìm hiểu và làm quen về reactjs", lessons: 3 },
          { title: "Tuần 2. .....", lessons: 3 },
          { title: "Tuần 3. .......", lessons: 4 },
          { title: "Tuần 4. .........", lessons: 2 }
        ].map((section, index) => (
          <div className="accordion" key={index}>
            <div className="accordion-header" onClick={() => toggleAccordion(index)}>
              <span>{section.title}</span>
              <span>{section.lessons} Nhiệm vụ</span>
            </div>
            <div className="accordion-content" style={{ display: expanded[index] ? 'block' : 'none' }}>
              {/* Nội dung bài học */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
