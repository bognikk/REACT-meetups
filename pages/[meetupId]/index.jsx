import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
	return (
		<MeetupDetail
			image="https://content.r9cdn.net/rimg/dimg/27/1a/ae186708-city-5921-166a1a5eadc.jpg?width=1366&height=768&xhint=2564&yhint=2247&crop=true"
			title="A first meetup"
			address="Some address 5, 523445 Novi Sad"
			description="The meetup description"
		/>
	);
}

export async function getStaticPaths() {
	return {
		fallback: false,
		paths: [
			{
				params: {
					meetupId: "m1",
				},
			},
			{
				params: {
					meetupId: "m2",
				},
			},
		],
	};
}

export async function getStaticProps(context) {
	// fetch data for a single meetup

	const meetupId = context.params.meetupId;

	console.log(meetupId);

	return {
		props: {
			meetupData: {
				id: meetupId,
				image:
					"https://content.r9cdn.net/rimg/dimg/27/1a/ae186708-city-5921-166a1a5eadc.jpg?width=1366&height=768&xhint=2564&yhint=2247&crop=true",
				title: "A first meetup",
				address: "Some address 5, 523445 Novi Sad",
				description: "The meetup description",
			},
		},
		revalidate: 10,
	};
}

export default MeetupDetails;
