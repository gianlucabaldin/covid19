import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const Loading = ({ loading = true }) => (
  <ClipLoader
    color="#303f9f"
    loading={loading}
    size={40}
    data-id="loading-spinner"
  />
);

export default Loading;
