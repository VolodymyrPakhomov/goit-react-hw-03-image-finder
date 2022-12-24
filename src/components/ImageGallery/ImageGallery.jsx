import { Component } from 'react';

import { ImageGalleryList } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { fetchImages } from '../../servise/api';

export class ImageGallery extends Component {
  state = {
    data: { hits: [] },
  };
  async componentDidMount() {
    if (this.props.searchQueryProps !== '') {
      this.setState({
        data: await fetchImages(this.props.searchQueryProps, 1),
      });
    }
  }

  async componentDidUpdate(prevProps) {
    if (this.props.searchQueryProps !== '') {
      if (this.props.searchQueryProps !== prevProps.searchQueryProps) {
        this.setState({
          data: await fetchImages(this.props.searchQueryProps, 1),
        });
      }
    }
  }

  render() {
    return (
      <ImageGalleryList>
        {this.state.data.hits.map(img => {
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
    );
  }
}
//ImageGalleryItem onClic aPP///
