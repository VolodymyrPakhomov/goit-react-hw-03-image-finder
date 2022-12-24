import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalSection } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    // const { webformatURL, tags, largeImageURL } = this.props.hits;
    // console.log({ webformatURL, tags, largeImageURL });
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalSection>
          <img src={this.props.largeImage} alt="" />
        </ModalSection>
      </Overlay>,
      modalRoot
    );
  }
}
