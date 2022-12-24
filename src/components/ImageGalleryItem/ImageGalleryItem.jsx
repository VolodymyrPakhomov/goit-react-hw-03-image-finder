import { GalleryItem, ImageGalleryItemImage } from './ImageGalleryItem.styled';
// import { Modal } from '../Modal/Modal';

export const ImageGalleryItem = ({ imgProps, openModal }) => {
  return (
    <GalleryItem>
      <ImageGalleryItemImage
        onClick={() => openModal(imgProps.largeImageURL)}
        src={imgProps.previewURL}
        alt={imgProps.tags}
      />
    </GalleryItem>
  );
};
