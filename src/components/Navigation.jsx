import "../assets/css/navigation.css";
import Button from "./Button";

function Navigation({ onAddNoteClick }) {
  return (
    <div className="navigation">
      <div className="navigation-wrapper container">
        <p className="logo">Notes 📝</p>
        <p className="nav-message"> Follow your daily notes with us </p>
        <div className="nav-options">
          <div className="nav-icon">
            <Button navButton onClick={() => onAddNoteClick(true)}>
              Add Note +
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
