import React from 'react'
import Hero from "../components/Hero";
import Blog from '../components/Blog';
import FeaturedBlog from '../components/FeaturedBlog';
function BlogPage() {
  return (
    <div>
      <Hero title="Blogs" />
      <div className="rts__section section__padding">
        <div className="container">
            <div className="row g-30">
                <div className="col-lg-12">
                    <div className="row g-30">
                        <FeaturedBlog />
                        <Blog />
                       
                    </div>
                 
                </div>
                
            </div>
        </div>
    </div>
    </div>
  );
}

export default BlogPage