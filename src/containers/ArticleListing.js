import React from 'react';

// Component Imports
import ArticleCard from '../components/ArticleCard';

// Data Imports
import Data from '../components/data';

function ArticleListing() {
    console.log("Data", Data); // inspect to check if import works
    return (
        <main>
            <header>
                <h1>Articles</h1>
            </header>
            { Data.map((article, i) => (
                <ArticleCard key={i} articleData={article} />
            )) }
        </main>
    );
}

export default ArticleListing;