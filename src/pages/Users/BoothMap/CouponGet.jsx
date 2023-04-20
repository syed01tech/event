import React from "react";
import Header from "../../../Layout/Header/Header";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import "./CouponGet.css";
import rectangle1 from "../../../assets/Rectangle.png";
 
 const CouponGet = () => {
     return(
        <>
        <div className="cg_wrapper">
        <div>
        <Header title={"Booth Map"} button={"1"} path={"/home"}/>
        </div>
        <div className="coupon_notification">
            <p>Coupon Get!</p>
        </div>
        <div className="cardwrap">
            <div id="Coupon">
                <Card sx={{ width: 345, marginTop: 5, marginBottom: 1 }}>
                    <CardMedia
                        sx={{ height: 250 }}
                        image={rectangle1}
                        title="Rectangle"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Coupon Title
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        You can use it at Sunday Market.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Grid container>
                            <Grid xs={4}>
                                <Button size="small">HKD $100</Button>
                            </Grid>
                            <Grid className="code_number" xs={8}>
                                <Button size="small">Code: 335337</Button>
                            </Grid>
                        </Grid>
                    </CardActions>
                </Card>
            </div>
        </div>
        </div>
        </>
    );
};

export default CouponGet;