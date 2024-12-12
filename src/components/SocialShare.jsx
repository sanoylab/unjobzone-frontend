import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTwitter } from "react-icons/fa";

const SocialShare = () => {
  const currentUrl = window.location.href;

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`,
    instagram: `https://www.instagram.com/?url=${currentUrl}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${currentUrl}`,
    twitter: `https://twitter.com/share?url=${currentUrl}`
  };

  return (
    <div className="share-buttons">
      <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer">
        <FaFacebook size={32} />
      </a>
      <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer">
        <FaTwitter size={32} />
      </a>
      <a href={shareLinks.instagram} target="_blank" rel="noopener noreferrer">
        <FaInstagram size={32} />
      </a>
      <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={32} />
      </a>
      <a href={shareLinks.pinterest} target="_blank" rel="noopener noreferrer">
        <FaPinterest size={32} />
      </a>

    </div>
  );
};

export default SocialShare;