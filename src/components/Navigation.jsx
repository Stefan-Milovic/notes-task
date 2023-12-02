import "../assets/css/navigation.css";

function Navigation({ onAddNoteClick }) {
  return (
    <div className="navigation">
      <div className="navigation-wrapper container">
        <p className="logo">Notes 📝</p>
        <p className="nav-message"> Follow your daily notes with us </p>
        <div className="nav-options">
          <div className="nav-icon">
            <button onClick={() => onAddNoteClick(true)}>Add Note +</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
