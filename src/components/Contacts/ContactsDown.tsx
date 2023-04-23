import ButtonSite from '../../UI/ButtonSite/ButtonSite';
import Container from '../../UI/Container/Container';
import MyHeader from '../../UI/MyHeader/MyHeader';
import styles from "./Contacts.module.css"

const ContactsDown = () => {
	return (
		<Container className={styles['contacts-down']}>
			<MyHeader
				title='Need help with photography or videography?'
				text="We're here for you!"
			/>
			<ButtonSite
				title='Get in touch'
				onClickHandler={() => alert('start Contact')}
			/>
		</Container>
	);
};
export default ContactsDown;
