import { Card, CardActions, CardContent, Typography, Button, Grid, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import React, { useState } from 'react';
import { getMatchDetails, getMatches } from '../API/Api';
import grey from '@material-ui/core/colors/grey';

const MyCard = (props) => {

    const [details, setDetails] = useState({});

    const [open, setOpen] = useState(false);

    const handleClick = (id) => {

        getMatchDetails(id).then(
            (data) => {
                console.log(data);
                setDetails(data);
                handleOpen();
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )

    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const getDialog = () => {
        return (
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle id='alert-dialog-title'>
                    Match Details...
            </DialogTitle>
                <DialogContent>
                    <DialogContentText id='alert-dialog-description'>
                        <Typography>{details.stat}</Typography>
                        <Typography>
                            Match 
                        <span style={{ fontWeight: "bold" }}>
                                {(details.matchStrated) ? "Started" : " has not Started"}
                            </span>
                        </Typography>
                        <Typography>
                            Score
                        <span style={{ fontWeight: "bold" }}>
                                {" " + details.score}
                            </span>
                        </Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Close
                </Button>
                </DialogActions>
            </Dialog>
        )
    }

    return (
        <>
            <Card style={{ marginLeft: 50, marginRight: 50, marginTop: 20, paddingTop: 20, paddingBottom: 20, backgroundColor: grey[300] }}>
                <CardContent>
                    <Grid container justify='center' spacing={5} alignItems='center'>
                        <Grid item>
                            <Typography variant='h5'>{props.match['team-1']}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='h3' color='primary'>VS</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='h5'>{props.match['team-2']}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid container justify='center' sapcing={5}>
                        <Button variant='contained' color='primary' item onClick={() => { handleClick(props.match.unique_id) }}>
                            Show Details
                        </Button>
                        <Button variant='outlined' color='primary' item style={{ marginLeft: 10 }}>
                            Start Time {new Date(props.match.dateTimeGMT).toLocaleString()}
                        </Button>
                    </Grid>
                </CardActions>
            </Card>

            {getDialog()}
        </>

    );
}

export default MyCard;