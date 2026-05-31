import React from 'react';

/**
 * Handle secure download of Jacob Hull's CV.
 * Uses fetch to retrieve the binary data with credentials / standard browser context,
 * then converts it to a local Blob URL to trigger download, bypassing proxy/iframe redirect issues.
 */
export const handleDownloadCV = async (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  try {
    const response = await fetch('/Jacob_Hull_CV.pdf');
    if (!response.ok) {
      throw new Error(`Server returned status: ${response.status}`);
    }
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Jacob_Hull_CV.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  } catch (err) {
    console.error('Failed to download CV via fetch, falling back to direct link', err);
    // Fallback: trigger standard direct navigation
    const a = document.createElement('a');
    a.href = '/Jacob_Hull_CV.pdf';
    a.download = 'Jacob_Hull_CV.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
};
