import { useEffect } from 'react';

import { connect } from 'react-redux';

import {
  fetchPhotos,
  deletePhoto,
  addPhoto,
  editPhoto,
} from '../../Redux/photos/photos.actions';

import HeaderNavBar from '../../Components/HeaderNavBar/HeaderNavBar';
import CardListPhotos from '../../Components/Photos/CardListPhotos/CardListPhotos';

const PhotosPage = ({
  photos,
  fetchPhotos,
  deletePhoto,
  addPhoto,
  editPhoto,
}) => {
  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  return (
    <div>
      <HeaderNavBar />
      <CardListPhotos
        data={photos}
        deleteItem={deletePhoto}
        addItem={addPhoto}
        editItem={editPhoto}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  photos: state.photosReducer.photos,
});

const mapDispatchToProps = {
  fetchPhotos,
  deletePhoto,
  addPhoto,
  editPhoto,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotosPage);
