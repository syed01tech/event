import React from "react";
import Header from "../../../Layout/Header/Header";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import "./RedemptionList.css";
import rectangle1 from "../../../assets/Rectangle.png"
import rectangle2 from "../../../assets/Rectangle2.png"
 
 const RedemptionList = () => {
     return(
        <>
        <div className="rl_wrapper">
        <div>
        <Header title={"Redemption List"} button={"1"} path={"/home"}/>
        </div>
        <div className="cardwrap">
            <div id="Coupon">
                <Card sx={{ width: '360px', marginTop: '20px', marginBottom: 1 }}>
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
            <div id="Gift">
                <Card sx={{ width: '360px', marginTop: '20px', marginBottom: '50px'}}>
                    <CardMedia
                        sx={{ height: 250 }}
                        image={rectangle2}
                        title="Rectangle"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Gift Redeem
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Enjoy your gift!
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
        </div>
        </>
    );
};

export default RedemptionList;