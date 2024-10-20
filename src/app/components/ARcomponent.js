"use client";

import { useEffect } from 'react';

const ARComponent = () => {
  useEffect(() => {
    // Ensure that A-Frame is loaded once
    if (!document.querySelector('script[src="https://aframe.io/releases/1.2.0/aframe.min.js"]')) {
      const aframeScript = document.createElement('script');
      aframeScript.src = 'https://aframe.io/releases/1.2.0/aframe.min.js';
      aframeScript.async = true;
      aframeScript.onload = () => {
        console.log('A-Frame loaded');
      };
      document.head.appendChild(aframeScript);
    }

    // Ensure that AR.js is loaded once
    if (!document.querySelector('script[src="https://rawcdn.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.min.js"]')) {
      const arjsScript = document.createElement('script');
      arjsScript.src = 'https://rawcdn.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.min.js';
      arjsScript.async = true;
      arjsScript.onload = () => {
        console.log('AR.js loaded');
      };
      document.head.appendChild(arjsScript);
    }

    return () => {
      // Clean up any script tags that were added to avoid conflicts
      const aframeScript = document.querySelector('script[src="https://aframe.io/releases/1.2.0/aframe.min.js"]');
      const arjsScript = document.querySelector('script[src="https://rawcdn.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.min.js"]');
      if (aframeScript) document.head.removeChild(aframeScript);
      if (arjsScript) document.head.removeChild(arjsScript);
    };
  }, []);

  return (
    <div>
      <a-scene
        embedded
        vr-mode-ui="enabled: false"
        arjs="sourceType: webcam; debugUIEnabled: false;"
      >
        <a-marker preset="hiro">
          <a-box position="0 0.5 0" material="color: yellow"></a-box>
        </a-marker>
        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
};

export default ARComponent;
