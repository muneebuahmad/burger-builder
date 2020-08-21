import React from "react";

import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

import styles from "./CheckoutSummary.module.css";

const CheckoutSummary = (props) => {
	return (
		<div className={styles.checkoutSummary}>
			<h1>We hope it tastes great!</h1>
			<div style={{ width: "100%", margin: "auto" }}>
				<Burger ingredients={props.ingredients} />
			</div>
			<Button btnType="danger" clicked={props.checkoutCancelled}>
				CANCEL
			</Button>
			<Button btnType="success" clicked={props.checkoutContinued}>
				CONTINUE
			</Button>
		</div>
	);
};

export default CheckoutSummary;
