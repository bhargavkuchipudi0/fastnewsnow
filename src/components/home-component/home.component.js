import React from 'react'

import './home.component.scss';
import HeadLineComponent from './headline-component/headline.component';
import HomeCategoriesComponent from './home-categories-component/home-categories.component';
import TrendingComponent from './trending-component/trending.component';
import EditorPickComponent from './editor-pick-component/editor-pick.component';

class HomeComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="home-container">
                <div className="mrgn-auto">
                    <HeadLineComponent />
                    <HomeCategoriesComponent />
                    <TrendingComponent />
                    <EditorPickComponent />
                </div>
            </div>
        )
    }

}

export default HomeComponent;