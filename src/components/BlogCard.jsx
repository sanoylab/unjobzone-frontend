import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({id, thumbnail, title}) => {
  return (


    <div className="rts__single__blog organization-card">
        <Link to={`/blog/${id}`} className="blog__img">
            <img src={thumbnail} className="mb-2" alt="blog" />
        </Link>
        <div className="blog__meta">
            
            <Link to={`/blog/${id}`} className="h6 fw-semibold">
                {title}
            </Link>
            <Link to={`/blog/${id}`} className="readmore__btn d-flex mt-3 gap-2 align-items-center">Read More <i className="fa-light fa-arrow-right"></i></Link>
        </div>
    </div>

















    
  )
}

export default BlogCard