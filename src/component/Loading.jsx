import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const Loading = ({ loading = true, size = 40 }) => (
  <ClipLoader
    color="#303f9f"
    loading={loading}
    size={size}
    data-test-id="loading-spinner"
  />
);

export default Loading;
