import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const TitleBox: React.FC = () => {
  return (
    <Grid xs={0} sm={0} md={6} lg={6} xl={6} minHeight={550}>
      <Box
        sx={{
          backgroundImage: `url("https://i.ibb.co/0M5t83S/ees.png")`,
         
          display: {
            xs: 'none',
            sm: 'none',
            md: 'flex',
            lg: 'flex', 
            xl: 'flex'
          },
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          borderRadius: "0px 30px 30px 0",
        }}
      >
       
      </Box>
    </Grid>
  );
};

export default TitleBox;
