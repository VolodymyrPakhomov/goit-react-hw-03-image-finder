import { Component } from 'react';
import { Loader } from 'components/Loader/Loader';
import { ImageGalleryList } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { fetchImages } from '../../servise/api';
import { Button } from '../Button/Button';
export class ImageGallery extends Component {
  state = {
    page: 1,
    images: [],
    loading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      this.props.searchQueryProps !== '' &&
      this.props.searchQueryProps !== prevProps.searchQueryProps
    ) {
      this.setState({ loading: true });
      const respons = await fetchImages(this.props.searchQueryProps, 1);
      this.setState({
        images: [...respons.hits],
        page: 1,
        loading: false,
      });
    } else if (
      this.props.searchQueryProps !== '' &&
      this.state.page !== prevState.page
    ) {
      this.setState({ loading: true });
      const respons = await fetchImages(
        this.props.searchQueryProps,
        this.state.page
      );
      this.setState({
        images: [...this.state.images, ...respons.hits],
        loading: false,
      });
    }
  }

  onLoadMore = () => {
    this.setState(() => ({
      page: this.state.page + 1,
    }));
  };

  render() {
    return (
      <>
        <ImageGalleryList>
          {this.state.images.map(img => {
            return (
              <ImageGalleryItem
                key={img.id}
                imgProps={img}
                // largeImageURL={img.largeImageURL}
                openModal={this.props.openModal}
              />
            );
          })}
        </ImageGalleryList>
        {this.state.loading && <Loader />}
        {this.state.images.length > 0 ? (
          <Button onClick={this.onLoadMore} />
        ) : null}
      </>
    );
  }
}
