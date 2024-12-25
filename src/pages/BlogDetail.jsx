import React, { useEffect, useState } from "react";
import { getBlogDetail } from "../Api";
import Hero from "../components/Hero";
import Spinner from "../components/Spinner";
import { useParams } from "react-router-dom";
import { marked } from "marked";

function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const APP_URL = import.meta.env.VITE_APP_URI;
  console.log("id", id);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const data = await getBlogDetail(id);
        console.log(data);
        setBlog(data.data[0]);
      } catch (error) {
        console.error("Error fetching job detail:", error);
      } finally {
        setLoading(false); // Set loading to false after the fetch is complete
      }
    };
    fetchBlogDetail();
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  if (!blog) {
    return <div>No blog detail available.</div>;
  }

  return (
    <div>
      <Hero title={blog.title} />



      <div class="rts__section section__padding">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <div class="rts__blog__details">
                        {/* <img src={`${APP_URL}/assets/blog/${blog.thumbnail}`} alt="" class="rounded-3 mb-30 mb-md-5" style={{width: '100%'}} /> */}
                        <div
                    dangerouslySetInnerHTML={{ __html: marked(blog.content) }}
                  />{" "}    
                        
                       
                       

                       
                     

                    </div>
                </div>
            </div>
        </div>
     </div>




     
    </div>
  );
}

export default BlogDetail;
