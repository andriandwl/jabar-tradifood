import React from "react";

class PoetryInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      limit: 50,
    };

    this.onChangeTitleHandler = this.onChangeTitleHandler.bind(this);
    this.onChangeBodyHandler = this.onChangeBodyHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onChangeTitleHandler(event) {
    if (this.state.limit >= 0 && event.target.value.length <= 50) {
      this.setState(() => {
        return {
          title: event.target.value,
          limit: 50 - event.target.value.length,
        };
      });
    }
  }

  onChangeBodyHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addPoetry(this.state);
    this.setState(() => {
      return {
        title: "",
        body: "",
        limit: 50,
      };
    });
  }
  render() {
    return (
      <form className="poetry-input" onSubmit={this.onSubmitEventHandler}>
        <p className="poetry-input_limit">Sisa Karakter : {this.state.limit}</p>
        <input
          className="poetry-input_title"
          placeholder="Masukan Judul ..."
          type="text"
          value={this.state.title}
          onChange={this.onChangeTitleHandler}
        />
        <textarea
          className="poetry-input_body"
          placeholder="Masukan Poetry ..."
          type="text"
          value={this.state.body}
          onChange={this.onChangeBodyHandler}
        />
        <button type="submit">Tambah</button>
      </form>
    );
  }
}

export default PoetryInput;
