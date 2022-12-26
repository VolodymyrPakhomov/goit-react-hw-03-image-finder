import { Component } from 'react';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Modal } from 'components/Modal/Modal';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { AppConteiner } from './App.styled';

export class App extends Component {
  state = {
    searchQuery: '',
    showModal: false,
    largeImageURL: '',
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  openModal = largeImageURL => {
    this.setState({ largeImageURL });
    this.toggleModal();
    console.log(largeImageURL);
  };

  onSubmitApp = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    const { searchQuery, showModal, largeImageURL } = this.state;

    return (
      <AppConteiner>
        <Searchbar onSubmitProps={this.onSubmitApp} />
        <ImageGallery
          searchQueryProps={searchQuery}
          openModal={this.openModal}
        />
        {showModal && (
          <Modal onClose={this.toggleModal} largeImage={largeImageURL} />
        )}
      </AppConteiner>
    );
  }
}
