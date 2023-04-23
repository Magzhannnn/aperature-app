import React from 'react';
import styles from './IdenticalWrap.module.css';
import { IIdentical } from '../../types/identical';
import ImageInfo from '../ImageInfo/ImageInfo';

interface IdenticalWrapProps {
	item: IIdentical;
}

const IdenticalWrap: React.FC<IdenticalWrapProps> = ({ item }) => {
	return (
		<div className={styles[`identical_${item.value}`]}>
			<div className={styles['identical-inner']}>
				<div className={styles['identical-content']}>
					<div className={styles['identical_title']}>{item.title}</div>
					<div className={styles['identical_text']}>{item.text}</div>
				</div>
				<ImageInfo
					clock={item.clock}
					shape={item.shape}
					iso={item.iso}
					place={item.place}
					placeLink={item.placeLink}
					className={styles['identical-info']}
				/>
			</div>
		</div>
	);
};

export default IdenticalWrap;
