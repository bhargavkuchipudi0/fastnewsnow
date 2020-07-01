import React from 'react';
import './home-categories.component.scss';

var HomeCategoriesComponent = (props) => {
    return (
        <section className="popular-cat">
            <h2 className="section-title">popular categories</h2>
            <div className="cat-holder">
                <div className="categorie ">
                    <div className="cat-image cat--1">

                    </div>
                    <p>culture</p>
                </div>
                <div className="categorie ">
                    <div className="cat-image cat--2">

                    </div>
                    <p>lifestyle</p>
                </div>
                <div className="categorie ">
                    <div className="cat-image cat--3">

                    </div>
                    <p>technology</p>
                </div>
                <div className="categorie ">
                    <div className="cat-image cat--4">

                    </div>
                    <p>news</p>
                </div>
                <div className="categorie ">
                    <div className="cat-image cat--5">

                    </div>
                    <p>movies</p>
                </div>
                <div className="categorie ">
                    <div className="cat-image cat--6">

                    </div>
                    <p>music</p>
                </div>
            </div>
        </section>
    )
}

export default HomeCategoriesComponent;