import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";

import styles from "./NavigationItems.module.css";

const navigationItems = (props) => (
	<ul className={styles.navigationItems}>
		<NavigationItem link="/" exact>
			Burger Builder
		</NavigationItem>
		<NavigationItem link="/orders">Orders</NavigationItem>
	</ul>
);

export default navigationItems;
