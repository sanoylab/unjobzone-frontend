import React from 'react'
import Hero from "../components/Hero";
import Blog from '../components/Blog';
function BlogPage() {
  return (
    <div>
      <Hero title="Blogs" />
      <div className="rts__section section__padding">
        <div className="container">
            <div className="row g-30">
                <div className="col-lg-12">
                    <div className="row g-30">
                        <div className="col-12 blog__slider mb-4">
                            <div className="blog__content d-flex flex-wrap flex-xl-nowrap gap-5 align-items-center">
                                <div className="blog__thumb">
                                    <a href="blog-details.html" className="blog__thumbnail">
                                        <img className="rounded-2 w-50" src="assets/img/home-2/blog/1.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="blog__content__meta">
                                    <a href="#" className="category d-block">Business</a>
                                    <a href="blog-details.html" className="blog__title l--3 h3">
                                        Job Tips How to Become a
                                        Business Man to Intelligence
                                        Analystin 6 Simple Steps
                                    </a>
                                    <p className="mt-4">Whether you're an experienced professional or a fresh graduate eager 
                                        to dive into the workforce, we have something for everyone. From tech 
                                        wizards to marketing mavens, finance gurus to creative minds, our diverse 
                                        range of listings caters to a variety of skills and interests.
                                    </p>
                                    <div className="blog__author mt-50 d-flex gap-3 align-items-center">
                                        <div className="author__img">
                                            <img className="rounded-5" src="assets/img/home-2/author/1.svg" alt="" />
                                        </div>
                                        <div className="author__meta">
                                            <span className="h6 mb-0 d-block">Jack Maa</span>
                                            <p>March 14, 2024</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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