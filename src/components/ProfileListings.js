import React from "react";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import DeleteItem from "./DeleteItem";
import UpdateItem from './UpdateItem';

function ProfileListings(props) {
	const { listings } = props;

	return (
		<CardColumns>
			{listings.map((listing) => (
				<Card>
					<Card.Body>
						<Card.Title>{listing.item}</Card.Title>
						<Card.Subtitle>{listing.price}</Card.Subtitle>
						<Card.Text>{listing.location}</Card.Text>
						<Card.Text>{listing.description}</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small>Quantity available: {listing.amount}</small>
					</Card.Footer>
					<button onClick={UpdateItem}>Edit Listing</button>
					<button onClick={DeleteItem}>Delete Listing</button>
				</Card>
			))}
		</CardColumns>
	);
}

export default ProfileListings;
