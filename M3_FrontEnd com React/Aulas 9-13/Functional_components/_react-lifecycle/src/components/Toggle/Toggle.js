import React from 'react';

export default function Toggle({ onToggle, enabled }) {
  const handleChange = (event) => {
    const isChecked = event.target.checked;
    onToggle(isChecked);
  };

  return (
    <div className="switch">
      <label>
        Mostrar Usuários:
        <input type="checkbox" checked={enabled} onChange={handleChange} />
        <span className="lever"></span>
      </label>
    </div>
  );
}
