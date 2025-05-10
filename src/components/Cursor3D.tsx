
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Cursor3D = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const cursorMainRef = useRef<HTMLDivElement>(null);
  const cursorTrail1Ref = useRef<HTMLDivElement>(null);
  const cursorTrail2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Update cursor position with smooth animation
  useEffect(() => {
    if (!cursorMainRef.current || !cursorTrail1Ref.current || !cursorTrail2Ref.current) return;

    // Apply different transition speeds to create trailing effect
    const setPosition = (element: HTMLElement, delay: number, scale: number = 1) => {
      setTimeout(() => {
        element.style.transform = `translate(${mousePosition.x}px, ${mousePosition.y}px) translate(-50%, -50%) scale(${scale})`;
      }, delay);
    };

    setPosition(cursorMainRef.current, 0, clicked ? 0.8 : 1);
    setPosition(cursorTrail1Ref.current, 50, clicked ? 1.2 : 0.8);
    setPosition(cursorTrail2Ref.current, 100, clicked ? 1.4 : 0.6);
  }, [mousePosition, clicked]);

  return (
    <>
      {/* Main cursor */}
      <div 
        ref={cursorMainRef}
        className="cursor-main fixed top-0 left-0 pointer-events-none z-50 w-8 h-8 rounded-full transition-transform duration-200 mix-blend-difference"
        style={{
          backgroundColor: 'rgba(245, 66, 152, 0.5)',
          backdropFilter: 'blur(4px)',
          boxShadow: '0 0 20px rgba(245, 66, 152, 0.7)',
        }}
      />
      
      {/* Trail effect 1 */}
      <div 
        ref={cursorTrail1Ref}
        className="cursor-trail fixed top-0 left-0 pointer-events-none z-40 w-12 h-12 rounded-full transition-transform duration-300"
        style={{
          backgroundColor: 'rgba(20, 110, 240, 0.15)',
          backdropFilter: 'blur(2px)',
          boxShadow: '0 0 15px rgba(20, 110, 240, 0.5)',
        }}
      />
      
      {/* Trail effect 2 */}
      <div 
        ref={cursorTrail2Ref}
        className="cursor-trail fixed top-0 left-0 pointer-events-none z-30 w-16 h-16 rounded-full transition-transform duration-500"
        style={{
          backgroundColor: 'rgba(138, 43, 226, 0.1)',
          backdropFilter: 'blur(1px)',
          boxShadow: '0 0 25px rgba(138, 43, 226, 0.4)',
        }}
      />

      {/* Radial gradient background that follows the cursor at a distance */}
      <motion.div
        className="fixed pointer-events-none z-20 w-96 h-96 rounded-full opacity-20 bg-gradient-to-r from-kunalpink via-kunalblue to-purple-500"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: clicked ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 30,
          mass: 0.5
        }}
        style={{
          translateX: "-50%",
          translateY: "-50%",
          filter: "blur(40px)"
        }}
      />
    </>
  );
};

export default Cursor3D;
