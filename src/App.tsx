import React from 'react';
import './App.css';
import { INote, INoteStore } from "./NoteStore";
import { observer } from "mobx-react";

@observer
class App extends React.Component<{store: INoteStore}> {
  // React.Component<props, state>
  // React.Component<{}>

  public storeNote = (event: React.FormEvent): void => {
    event.preventDefault();
    const note: INote = {
      title: this.props.store.currentTitle,
      content: this.props.store.currentContent
    }
    this.props.store.addNote(note)
  }

  public render(): JSX.Element {
    return (
      <div className="App">
        <form onSubmit={this.storeNote}>
          <input type="text" value={this.props.store.currentTitle} onChange={(event) => this.props.store.setCurrentTitle(event.target.value)}>
          </input>
          <input type="text" value={this.props.store.currentContent} onChange={(event) => this.props.store.setCurrentContent(event.target.value)}>
          </input>
          <button type="submit" value="Submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default App;
