import classes from "../styles/features.module.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { CircularProgress, Box } from "@mui/material";

function Features() {
  let value = 70;
  return (
    <div className={classes.features}>
      <div className={classes.top}>
        <h1 className="title">Total revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className={classes.bottom}>
        <div className={classes.features_chart}>
          <Box position="relative" display="inline-flex">
            <CircularProgress
              variant="determinate"
              value={value}
              size={"10rem"}
              thickness={0.5}
            />
            <Box
              top={0}
              left={0}
              bottom={0}
              right={0}
              position="absolute"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <span
                style={{ fontSize: "2rem", color: "#1976d2" }}
              >{`${value}%`}</span>
            </Box>
          </Box>
        </div>
        <p className={classes.title}>Total sales made today</p>
        <p className={classes.amount}>$420</p>
        <p className={classes.desc}>
          Previous transaction processing. Last payment may not included.
        </p>
        <div className={classes.summary}>
          <div className={classes.item}>
            <div className={classes.item_title}>Target</div>
            <div className={`${classes.item_result} ${classes.negative}`}>
              <KeyboardArrowDownIcon />
              <div className="result_amount">$12k </div>
            </div>
          </div>
          <div className={classes.item}>
            <div className={classes.item_title}>Last Week</div>
            <div className={`${classes.item_result} ${classes.positive}`}>
              <KeyboardArrowUpIcon />
              <div className="result_amount">$12k </div>
            </div>
          </div>
          <div className={classes.item}>
            <div className={classes.item_title}>Last Month</div>
            <div className={`${classes.item_result} ${classes.positive}`}>
              <KeyboardArrowUpIcon />
              <div className="result_amount">$12k </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
