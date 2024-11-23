import React from 'react';

interface State {
  pressedKey: string;
}

export class App extends React.Component<State> {
  state = {
    pressedKey: '',
  };

  handleKeyupEvent = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: event.key,
    });
  };

  componentWillUnmoun() {
    removeEventListener('keyup', this.handleKeyupEvent);
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyupEvent);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey
            ? `The last pressed key is [${pressedKey}]`
            : `Nothing was pressed yet`}
        </p>
      </div>
    );
  }
}