import './App.css';

function App() {
  return (
    <div className="App">
      <header className = "app-heading">
        Welcome To Fun With Triangles
      </header>
        <div className = "grid">
          <div className = "section-1 center-vertical-horizontal hover-effect">
            <label>Angles of Triangle</label>
          </div>
          <div className = "section-2 center-vertical-horizontal hover-effect">
            <label>Check Hypotenuse</label>
          </div>
          <div className = "section-3 center-vertical-horizontal hover-effect">
            <label>Calculate Area</label>
          </div>
          <div className = "section-4 center-vertical-horizontal hover-effect">
            <label>Take a quiz</label>
          </div>
      </div>
    </div>
  );
}

export default App;
