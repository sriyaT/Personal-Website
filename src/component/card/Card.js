import React, { Component } from 'react';
import './style.css';
// import Blog1 from '../../img/movie-seat-booking-sc.png';

export default class Card extends Component {
  render() {
    const { img, name, info, link } = this.props.card;

    return (
      <div className='card-container'>
        <div className='card'>
          <img src={img} alt='blog-1'></img>
          <section className='text-section'>
            <h6>{name}</h6>
            <p>{info}</p>
            <a className='read-more' href={link} target='blank'>
              Visit App...
            </a>
          </section>
        </div>
      </div>
    );
  }
}

// export default class Tour extends Component {
//   state = {
//     showInfo: false,
//   };
//   handleInfo = () => {
//     this.setState({ showInfo: !this.state.showInfo });
//   };
//   render() {
//     const { id, city, img, name, info } = this.props.tour;
//     const { removeTour } = this.props;
//     return (
//       <article className='tour'>
//         <div className='image-container'>
//           <img src={img} alt='img'></img>
//           <span
//             className='close-btn'
//             onClick={() => {
//               removeTour(id);
//             }}
//           >
//             <i className='fas fa-window-close' />
//           </span>
//         </div>
//         <div className='tour-info'>
//           <h3>{city}</h3>
//           <h4>{name}</h4>
//           <h5>
//             info{' '}
//             <span onClick={this.handleInfo}>
//               <i className='fas fa-caret-square-down' />
//             </span>
//           </h5>
//           {this.state.showInfo && <p>{info}</p>}
//         </div>
//       </article>
//     );
//   }
// }
