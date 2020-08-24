import React from 'react';
import useFetch from '../../context/useFetch';
import styles from './FeedModal.module.css';
import Error from '../../Helpers/Error';
import Loading from '../../Helpers/Loading';
import PhotoContent from '../Photo/PhotoContent';

import { useEffect } from 'react';
import { PHOTO_GET } from '../../services/api';

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
