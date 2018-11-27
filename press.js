import React, { Component } from 'react';

// A map of the keys on the left and the actual `e.key` on the right
const map = {
  space: ' ',
  up: 'arrowup',
  right: 'arrowright',
  down: 'arrowdown',
  left: 'arrowleft'
};

export default class Press extends Component {
  constructor(props) {
    super(props);
    this.onKey = this.onKey.bind(this);
    this.callbacks = Object.entries(props)
      .filter(([key]) => !/^__/.test(key))
      .filter(([key]) => key !== 'children')
      .map(([key, cb]) => [key.toLowerCase(), cb])
      .reduce((obj, [key, cb]) => ({ ...obj, [map[key] || key]: cb }), {});
  }

  onKey (e) {
    const key = e.key.toLowerCase();
    if (this.callbacks.any) this.callbacks.any({ ...e, key });
    if (!this.callbacks[key]) return;
    this.callbacks[key](e);
  }

  componentDidMount () {
    window.addEventListener('keydown', this.onKey);
  }

  componentWillUnmount () {
    window.removeEventListener('keydown', this.onKey);
  }

  render () {
    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
};
