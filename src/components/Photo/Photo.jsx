import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../context/useFetch';
import { useEffect } from 'react';
import { PHOTO_GET } from '../../services/api';
import Error from '../../Helpers/Error';
import Loading from '../../Helpers/Loading';
import PhotoContent from './PhotoContent';

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [id, request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <PhotoContent single={true} data={data} />
      </section>
    );
  else return null;
};

export default Photo;
