import { Card, CardContent, Typography } from "@mui/material";

function ServiceCard({ title, description, Icon }) {
  return (
    <Card sx={{ maxWidth: 350, margin: 2 }}>
      <CardContent sx={{ textAlign: "center", p: 3 }}>
        {Icon && <Icon fontSize="large" />}
        <Typography variant="h6" fontWeight={"bold"} mb={2}>
          {title}
        </Typography>
        <Typography variant="body2" color="inherit">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;
