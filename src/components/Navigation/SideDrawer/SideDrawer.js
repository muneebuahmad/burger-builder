import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux/Aux";

import styles from "./SideDrawer.module.css";

const sideDrawer = (props) => {
	let attachedClasses = [styles.sideDrawer, styles.close];
	if (props.isOpen) {
		attachedClasses = [styles.sideDrawer, styles.open];
	}

	return (
		<Aux>
			<Backdrop show={props.isOpen} clicked={props.closed} />
			<div className={attachedClasses.join(" ")}>
				<div className={styles.logo}>
					<Logo />
				</div>
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</Aux>
	);
};

export default sideDrawer;
