import { useEffect } from 'react';
import pdf from '../assets/test/OSDEM.pdf';

const DownloadLink = () => {
  useEffect(() => {
    const handleDownloadClick = (e) => {
      e.preventDefault();
      if (confirm('Do you want to download?')) {
        window.location.href = pdf; // Replace with the actual download link
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
