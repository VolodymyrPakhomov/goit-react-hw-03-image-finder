import { Component } from 'react';
import { Button } from 'components/Button/Button';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { AppConteiner } from './App.styled';

export class App extends Component {
  state = {
    searchQuery: '',
    showModal: false,
    largeImageURL: '',
    page: 1,
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

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
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
        <Loader />
        <Button onClick={this.onLoadMore} />

        {showModal && (
          <Modal onClose={this.toggleModal} largeImage={largeImageURL} />
        )}
      </AppConteiner>
    );
  }
}
