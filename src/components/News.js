import React, { Component } from 'react';
import NewsItem from './NewsItem';

export default class News extends Component {
    page = 1;
    total = 18;
    // apiUrl = `https://newsapi.org/v2/everything?q=tesla&from=2023-06-17&sortBy=publishedAt&apiKey=a739161e504a48c9a50c4e316b85272e`;
    apiUrl = `https://newsapi.org/v2/everything?q=apple&from=2023-07-16&to=2023-07-16&sortBy=popularity&apiKey=a739161e504a48c9a50c4e316b85272e&page=${this.page}&pageSize=09`;

    constructor() {
        super();
        this.state = {
            article : [],
            loading : false
        }
    }

    async componentDidMount(){
        let data = await fetch(`${this.apiUrl}`);
        let DATA = await data.json();
        this.total = DATA.totalResults;
        // console.log(DATA , this.total);
        this.setState({article : DATA.articles});
    }

    fetchIt = async ()=> {
        this.apiUrl = `https://newsapi.org/v2/everything?q=apple&from=2023-07-16&to=2023-07-16&sortBy=popularity&apiKey=a739161e504a48c9a50c4e316b85272e&page=${this.page}&pageSize=09`;
        let data = await fetch(`${this.apiUrl}`);
        let DATA = await data.json();
        this.setState({article : DATA.articles});
    }
    handleNext = async ()=> {
        this.page++;
        this.fetchIt();
    }

    handlePrev = ()=> {
        this.page--;
        this.fetchIt();
    }

  render() {
    return (
      <div className='container my-3'>
        <h1>Read the News From : NEWS HUNT</h1>
        
        <div className="row">
            {this.state.article.map((news)=> {
                return <div className="col-md-4" key = {news.url}>
                    <NewsItem news = {news}/>
                </div>
            })}
            
        </div>
        <div className='d-flex justify-content-between my-3'>
            <button disabled={this.page <= 1} type="button" className="btn btn-secondary" onClick={this.handlePrev}>Previous</button>
            <button disabled={this.page === this.total/20-1} type="button" className="btn btn-secondary" onClick={this.handleNext}>Next</button>
        </div>
      </div>
    )
  }
}
