import React, { Component } from 'react'
import img from './news_image.jpg';
// import {Link} from 'react-router-dom';

export default class NewsItem extends Component {
  render() {
  let {title, description, urlToImage, url } = this.props.news;
  return (
    <div>
      <div className="card  border border-primary-subtle" style= {{width: '18rem'}}>
        <img src={urlToImage ? urlToImage : img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description}
          </p>
          <a href={url} target="_blank" className="btn btn-primary" rel="noreferrer">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
  }
}
