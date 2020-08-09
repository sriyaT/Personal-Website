import React, { Component } from 'react';
import './style.css';

class Home extends Component {
  render() {
    return (
      <div className='container'>
        <h6 className='container-phrase'>
          Imagination is more important than knowledge. For knowledge is
          limited, whereas imagination embraces the entire world, stimulating
          progress, giving birth to evolution.
        </h6>
        <div className='search-container'>
          <input type='text' placeholder='Search Blog Here...'></input>
          <button className='search-btn'>Search</button>
        </div>
      </div>
    );
  }
}

export default Home;
