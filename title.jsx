import React from 'react';
import Table from './table';
import './dashboard-styles.css';

const Title = (props) => {
  return (
    <h1 celled selectable id="requests-table">Table</h1>
    <Table />
  );
};

export default Title;
