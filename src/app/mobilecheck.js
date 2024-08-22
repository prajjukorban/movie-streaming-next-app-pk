import { useEffect, useState } from 'react';

const MobileWarning = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if the device is mobile
    const checkMobileDevice = () => {
      const isMobileDevice = /Mobi|Android|iPhone/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
    };

    // Run the check on component mount
    checkMobileDevice();

    // Optionally, add event listeners for resizing (if you want to update on screen resize)
    window.addEventListener('resize', checkMobileDevice);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkMobileDevice);
    };
  }, []);

  if (!isMobile) {
    return null;
  }

  return (
    <div style={styles.overlay}>
      For a better experience, please visit this website on a PC or enable desktop mode on your mobile device.
    </div>
  );
};

const styles = {
  overlay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
    fontSize: '18px',
    textAlign: 'center',
    zIndex: 9999,
  },
};

export default MobileWarning;
