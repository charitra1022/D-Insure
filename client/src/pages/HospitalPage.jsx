import React, { useState } from "react";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

// Dummy data for hospitals
const hospitals = [
  { id: 1, name: "Hospital A", address: "123 Main St." },
  { id: 2, name: "Hospital B", address: "456 Oak Ave." },
  { id: 3, name: "Hospital C", address: "789 Elm Rd." },
];

const HospitalPage = () => {
  const navigate = useNavigate();
  const [selectedHospital, setSelectedHospital] = useState(null);

  const handleHospitalClick = (hospital) => {
    setSelectedHospital(hospital);
    navigate("/enroll", { state: hospital });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Typography variant="h4" gutterBottom>
        Hospital Page
      </Typography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {hospitals.map((hospital) => (
          <ListItem
            key={hospital.id}
            button
            onClick={() => handleHospitalClick(hospital)}
          >
            <ListItemText
              primary={hospital.name}
              secondary={hospital.address}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default HospitalPage;
