import React from "react";
import Message from "./message/Message";
import PoetryInput from "./PoetryInput";
import PoetryList from "./PoetryList";
import SearchPoetry from "./search-poetry/SearchPoetry";
import { getInitialData } from "./utils/index";

class PoetryApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      poetry: getInitialData(),
      search: "",
    };

    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddPoetryHandler = this.onAddPoetryHandler.bind(this);
  }

  onSearchEventHandler(title) {
    this.setState(() => {
      return {
        search: title,
      };
    });
  }

  onDeleteHandler(id) {
    const poetry = this.state.poetry.filter((poe) => poe.id !== id);
    this.setState({ poetry });
  }
  onArchiveHandler(id) {
    const poetry = this.state.poetry.map((poe) =>
      poe.id === id ? { ...poe, archived: !poe.archived } : poe
    );
    this.setState({ poetry });
  }

  onAddPoetryHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        poetry: [
          ...prevState.poetry,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date(),
          },
        ],
      };
    });
  }

  render() {
    const poetry = this.state.poetry.filter((poe) =>
      poe.title.toLowerCase().includes(this.state.search.toLowerCase())
    );
    const daftarPoetry = poetry.filter((poe) => {
      return poe.archived === false;
    });

    const archivedPoetry = poetry.filter((poe) => {
      return poe.archived === true;
    });
    return (
      <div className="poetry-app">
        <div className="poetry-header">
          <h1>Poetry</h1>
          <SearchPoetry onSearch={this.onSearchEventHandler} />
        </div>
        <div className="poetry-body">
          <h2>Daftar Data</h2>
          {daftarPoetry.length > 0 ? (
            <PoetryList
              poetry={daftarPoetry}
              onDelete={this.onDeleteHandler}
              onArchive={this.onArchiveHandler}
            />
          ) : (
            <Message />
          )}
        </div>
        <div className="poetry-action">
          <h2>Arsip Data</h2>
          {archivedPoetry.length > 0 ? (
            <PoetryList
              poetry={archivedPoetry}
              onDelete={this.onDeleteHandler}
              onArchive={this.onArchiveHandler}
            />
          ) : (
            <Message />
          )}
        </div>
        <div className="poetry-inputed">
          <h2>Tambah Data</h2>
          <PoetryInput addPoetry={this.onAddPoetryHandler} />
        </div>
      </div>
    );
  }
}

export default PoetryApp;
