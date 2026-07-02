import { Box, Chip } from "@mui/material";
import "./AnimatedBar.css";

const words = [
  "Mouse",
  "Decoration",
  "Desktop",
  "Keyboard",
  "Laptop",
  "Monitor",
  "Headphones",
  "Speaker",
  "Gaming",
  "Office",
  "Chair",
  "Camera",
  "Tablet",
  "Phone",
  "Watch",
  "Printer",
  "Router",
  "SSD",
  "USB",
  "Microphone",
  "Lighting",
  "Accessories",
  "Electronics",
  "Smart Home",
];

export const AnimatedBar = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        mt: 5,
        mb: 5,
        py: 2,
      }}>
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          height: "100%",
          width: 80,
          zIndex: 2,
          pointerEvents: "none",
          background: "linear-gradient(to right, transparent 100%)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          right: 0,
          top: 0,
          height: "100%",
          width: 80,
          zIndex: 2,
          pointerEvents: "none",
          background: "linear-gradient(to left,  transparent 100%)",
        }}
      />

      <Box className="marquee">
        {[...words, ...words].map((word, index) => (
          <Chip
            key={index}
            label={word}
            sx={{
              backgroundColor: "#e7ecf7",
              color: "gray",
              borderRadius: "10px",
              fontWeight: 500,
              mx: 1,
            }}
          />
        ))}
      </Box>
    </Box>
  );
};
