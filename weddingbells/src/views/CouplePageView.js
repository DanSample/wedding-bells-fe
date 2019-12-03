import React, { Component } from "react";

import MasterGuestComponent from "../components/MasterGuestComponent/MasterGuestComponent";
import VendorComponent from "../components/MasterVendorComponent/index";

class CouplePageView extends Component {
	render() {
		return (
			<div className="couplePageView">
				<MasterGuestComponent />
				<VendorComponent />
			</div>
		);
	}
}

export default CouplePageView;
