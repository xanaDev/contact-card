import React from "react";
import "./App.scss";
import ContactCard from "./components/ContactCard";

function App() {
  // test user
  const john = {
    userId: 12,
    fullName: "Gina Snelly",
    profileImageUrl: "https://randomuser.me/api/portraits/women/55.jpg",
    trust: 75
  };

  return (
    <div className="App">
      <header className="App-header">Welcome !</header>

      <div className="container">
        <ContactCard user={john}></ContactCard>
      </div>
    </div>
  );
}

export default App;
