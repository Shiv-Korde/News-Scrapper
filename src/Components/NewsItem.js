import React from 'react'

const NewsItem = (props) => {

        let u = "https://st.depositphotos.com/1011646/1255/i/950/depositphotos_12553000-stock-photo-breaking-news-screen.jpg";
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (

            <div>
                <div className="card mx-2 my-2 ">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }}>
                        <span className=" badge rounded-pill bg-danger" style={{ left: "83%", zIndex: "1" }}>
                            {source}
                        </span>
                    </div>
                    <img src={imageUrl ? imageUrl : u} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-body-secondary">By <strong>{author}</strong> on {new Date(date).toGMTString()}</small></p>
                        <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
                {/* <div className="card text-bg-dark">
                    <img src={imageUrl} className="card-img" alt="..."/>
                        <div className="card-img-overlay">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div> */}
            </div>

        )
}

export default NewsItem
