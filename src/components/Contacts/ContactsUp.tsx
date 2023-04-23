import { IIdentical } from '../../types/identical';
import IdenticalWrap from '../../UI/IdenticalWrap/IdenticalWrap';

const ContactsUp = () => {
	const item: IIdentical = {
		value: 'featured3',
		title: 'Star fall in the Himalayas',
		text: 'Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.',
		clock: '6"',
		shape: 'f/11',
		iso: 800,
		place: 'Nepal',
		placeLink:
			'https://www.google.kz/maps/place/%D0%9A%D0%B0%D1%82%D0%BC%D0%B0%D0%BD%D0%B4%D1%83+44600,+%D0%9D%D0%B5%D0%BF%D0%B0%D0%BB/@27.708873,85.1702355,12z/data=!3m1!4b1!4m15!1m8!3m7!1s0x3995e8c77d2e68cf:0x34a29abcd0cc86de!2z0J3QtdC_0LDQuw!3b1!8m2!3d28.394857!4d84.124008!16zL20vMDE2end0!3m5!1s0x39eb198a307baabf:0xb5137c1bf18db1ea!8m2!3d27.7172453!4d85.3239605!16zL20vMDRjeDU?hl=ru',
	};
	return <IdenticalWrap item={item} />;
};
export default ContactsUp;
