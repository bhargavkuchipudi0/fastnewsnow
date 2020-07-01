import React from 'react';
import './trending.component.scss';

import TagComponent from '../../tag-component/tag.component';
import { sharedService } from '../../../services/shared.service';

class TrendingComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trendingData: [],
            queryRoute: 'everything',
            queryString: {
                q: 'trending',
                category: null,
                from: null,
                to: null,
                domain: null,
                source: null,
                page: 1,
                language: 'en',
                country: 'us'
            }
        }
    }

    componentDidMount = () => {
        this.getTrendingData();
    }

    navigateToStory = (url) => {
        window.open(url, '_blank');
    }

    getTrendingData = () => {
        sharedService.getHeadLines(this.state.queryRoute, this.state.queryString).then((res) => {
            this.state.trendingData.concat(res.data.articles);
            let trendingData = [];
            res.data.articles.forEach(article => {
                trendingData.push(article);
            })
            this.setState({
                trendingData
            })
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <section className="trending">
                <h2 className="section-title">trending</h2>
                <div className="trending-cont scroll-bar--h">
                    {
                        this.state.trendingData.map((obj, i) => {
                            return (
                                <article className="trend-art" key={i}>
                                    <div className="image-hold" style={{ backgroundImage: `url(${obj.urlToImage})` }}>

                                    </div>
                                    <div className="cont-hold">
                                        <p className="title" onClick={this.navigateToStory.bind(this, obj.url)}>{obj.title}</p>
                                        <div className="tags">
                                            <TagComponent name={'source'} type={'source'} data={obj.source.name} />
                                            <TagComponent name={'author'} type={'author'} data={obj.author} />
                                        </div>
                                    </div>
                                </article>
                            )
                        })
                    }

                </div>
            </section>
        )
    }
}

export default TrendingComponent;