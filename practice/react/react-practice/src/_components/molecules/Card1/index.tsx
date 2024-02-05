import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import Logo from "../../atoms/Logo";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export interface Card1props {}

const Card1: React.FC<Card1props> = ({}) => {
  return (
    <Card sx={{ width: "320px", border: "1px solid green" }}>
      <CardContent sx={{ padding: "0px" }}>
        <Grid
          container
          sx={{ border: "1px solid red", width: "320px", height: "271px" }}
        >
          <Grid item container justifyContent="space-between">
            <Grid item>
              <Logo />
            </Grid>
            <Grid item>
              <MoreHorizIcon />
            </Grid>
          </Grid>
          <Grid item container direction="column">
            <Grid item style={{ padding: "0px 0px" }}>
              <Typography fontSize="16px" fontWeight={600} lineHeight="24px">
                User Experience Designer
              </Typography>
            </Grid>
            <Grid item style={{ padding: "2px 0px" }}>
              <Typography
                fontSize="12px"
                fontWeight={500}
                lineHeight="16px"
                color="#FF725E"
              >
                HP
              </Typography>
            </Grid>
            <Grid item style={{ padding: "0px 0px" }}>
              <Typography
                fontSize="12px"
                fontWeight={500}
                lineHeight="16px"
                color="#656E66"
              >
                Hyderabad, Telangana, India
              </Typography>
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item style={{ padding: "30px 0px" }}>
              <Typography
                fontSize="12px"
                fontWeight={500}
                lineHeight="16px"
                color="#373C38"
              >
                Commute routes available :
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Card1;
