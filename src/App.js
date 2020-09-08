import React, { Component } from "react";
import Dog from "./components/Dog";
import Header from "./components/Header";
import "./App.css";
import { render } from "@testing-library/react";

class App extends Component {
  state = {
  dogs: [
    {
      name: "Scruffles",
      type: "Chihuahua",
    },
    {
      name: "Snarf",
      type: "Border Collie",
    },
    {
      name: "Wookie",
      type: "English Sheepdog",
    },
  ],
  newDescription: "",
};

onChangeNewFavorite = (event) => {
  const value = event.target.valuethis.setState({newDescription: value});
};

  onPickNewFavorite = () => {
    let newDogIndex = Math.floor(Math.random() * dogs.length);
    return dogs[newDogIndex];
  }

  favoriteDog = pickNewFavorite();


  render() {
  return (
    <div className="dogs">
      <Header numDogs={this.state.dogs.length} />
      <h2>My Dogs</h2>
      <ul className="dogList">
      {this.state.dogs.map((dog) => (
        <li>
          <Dog dog={dog} />
        </li>
      ))}
      </ul>
      <br />
      <div>
      <input style={styles.itemInput} onChange={this.onChangeNewFavorite} value={this.state.newDescription} type="text" />
    <button onClick={this.onPickNewFavorite} style={styles.itemButton}>Pick New Favorite</button>
      </div>
    </div>
  );
}
}

export default App;
