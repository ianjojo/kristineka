import Image from "next/image";
import React from "react";
const LightBox = ({
  children,
  src,
  alt,
  layout,
  objectFit,
  height,
  width,
  className,
  Wrapper = "div",
  zIndex = 100,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper onClick={toggleIsOpen}>
      {children}
      {isOpen ? (
        <div
          onClick={toggleIsOpen}
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            height: "100vh",
            width: "100vw",
            padding: "100px",
            backgroundColor: "rgba(0,0,0,0.7)",
            cursor: "pointer",
            zIndex,
          }}
        >
          <Image
            src={src}
            alt={alt}
            layout={layout}
            objectFit={objectFit}
            height={height}
            width={width}
            className={className}
          />
        </div>
      ) : null}
    </Wrapper>
  );
};
export default LightBox;
