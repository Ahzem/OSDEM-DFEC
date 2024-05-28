import { useEffect } from 'react';
import pdf from '../assets/doc/OSDEM.pdf';

const DownloadLink = () => {
  useEffect(() => {
    const handleDownloadClick = (e) => {
      e.preventDefault();
      if (confirm('Do you want to download?')) {
        window.location.href = pdf;
      }
    };

    const downloadLink = document.getElementById('download-link');
    if (downloadLink) {
      downloadLink.addEventListener('click', handleDownloadClick);
    }

    return () => {
      if (downloadLink) {
        downloadLink.removeEventListener('click', handleDownloadClick);
      }
    };
  }, []);

  return (
    <li><a href={pdf} id="download-link" target='_blank'>Download Application</a></li>
  );
};

export default DownloadLink;
