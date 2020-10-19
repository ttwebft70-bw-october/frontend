import React from "react";
import ItemListing from "./ItemListing";

function ProfileListings(props) {
	const { listings } = props;

	console.log(listings);

	return (
		<div className="profile-listings">
			{listings.map((listing) => (
				<ItemListing item={listing} />
			))}
		</div>
	);
}

export default ProfileListings;
