import React from 'react';
function InterviewChart({ title, countData, total }) {
  return (
    <div>
      <p>{title}</p>
      <div>
        {Object.keys(countData).map((key) => {
          const { value, label, count } = countData[key];
          return (
            <div key={label + value}>
              <p>{label}</p>
              <p>{(count / total || 0).toFixed(2) * 100}%</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default InterviewChart;
