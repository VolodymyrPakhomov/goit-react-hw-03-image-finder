import { Component } from 'react';
import { ButtonLoad } from './Button.styled';

export class Button extends Component {
  state = {
    page: 1,
  };

  render() {
    return (
      <ButtonLoad onClick={this.props.onClick} type="button">
        Load more
      </ButtonLoad>
    );
  }
}
