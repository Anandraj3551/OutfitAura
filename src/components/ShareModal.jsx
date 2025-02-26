import { useState } from "react";
import PropTypes from "prop-types";
import { X, Link2 } from "lucide-react";
import { assets } from "../assets/assets";

const ShareModal = ({ isOpen, onClose, title = "Check out this product" }) => {
  const [copied, setCopied] = useState(false);
  const shareUrl = window.location.href;

  if (!isOpen) return null;

  const shareLinks = [
    {
      name: "WhatsApp",
      imgSrc: assets.whatsapp,
      href: `https://wa.me/?text=${encodeURIComponent(`${title} ${shareUrl}`)}`,
    },
    {
      name: "Instagram",
      imgSrc: assets.instagram,
      href: `https://www.instagram.com/share?url=${encodeURIComponent(
        shareUrl
      )}&caption=${encodeURIComponent(title)}`,
    },
    {
      name: "Facebook",
      imgSrc: assets.facebook,

      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
    },

    {
      name: "LinkedIn",
      imgSrc: assets.linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`,
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-md relative p-6 shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-2 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Share Product</h2>
          <p className="text-gray-500 mt-1">
            Share this product with your friends and network
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {shareLinks.map((platform) => (
            <a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
            >
              <div
                className={`w-14 h-14 rounded-full ${platform.bgColor}  shadow-lg transform transition-all duration-200 group-hover:scale-110`}
              >
                <img
                  src={platform.imgSrc}
                  alt={platform.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-sm text-gray-600 font-medium">
                {platform.name}
              </span>
            </a>
          ))}
        </div>

        <div className="space-y-4">
          <p className="text-sm font-medium text-gray-700">Or copy link</p>
          <div className="flex gap-2">
            <input
              type="text"
              value={shareUrl}
              readOnly
              className="flex-1 px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 text-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
            <button
              onClick={copyToClipboard}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200
                ${
                  copied
                    ? "bg-green-500 text-white"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
            >
              <Link2 className="w-4 h-4" />
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ShareModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
};

ShareModal.defaultProps = {
  title: "Check out this product",
};

export default ShareModal;
