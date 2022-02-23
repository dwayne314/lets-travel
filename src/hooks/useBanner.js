import { useState, useEffect } from "react";

function useBanner() {
  const [banners, setBanners] = useState([]);

  function addBanner(message) {
    const nextId =
      banners.reduce((acc, banner) => (banner.id > acc ? banner.id : acc), 0) +
      1;
    setBanners([...banners, { message, id: nextId }]);
  }

  function clearBanner(id) {
    setBanners((ban) => ban.filter((banner) => banner.id !== id));
  }

  useEffect(() => {
    function handleTimeout() {
      setBanners(banners.slice(1, banners.length));
    }
    let bannerTimeout;
    if (banners.length) {
      bannerTimeout = window.setTimeout(handleTimeout, 3000);
    }
    return () => clearTimeout(bannerTimeout);
  });

  return { banners, addBanner, clearBanner };
}

export default useBanner;
