import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
	{
		id: "m1",
		title: "A First Meetup",
		image:
			"https://content.r9cdn.net/rimg/dimg/27/1a/ae186708-city-5921-166a1a5eadc.jpg?width=1366&height=768&xhint=2564&yhint=2247&crop=true",
		address: "Some address 5, 523445 Novi Sad",
		descritption: "This is a first meetup!",
	},
	{
		id: "m2",
		title: "A Second Meetup",
		image:
			"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/e0/7b/46/photo0jpg.jpg?w=500&h=-1&s=1",
		address: "Some address 34, 523445 Zrenjanin",
		descritption: "This is a second meetup!",
	},
];

const HomePage = (props) => {
	return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
	// fetch data from an API
	return {
		props: {
			meetups: DUMMY_MEETUPS,
		},
	};
}

export default HomePage;
