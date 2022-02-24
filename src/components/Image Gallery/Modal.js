import { FiArrowRightCircle, FiArrowLeftCircle } from 'react-icons/fi';
// import { RiCloseCircleLine } from 'react-icons/ri';

const Modal = ({ clickedImage, handleRight, handleLeft, setClickedImage }) => {
	const handleClick = e => {
		if (e.target.classList.contains('dismiss')) {
			setClickedImage(null);
		}
	};

	return (
		<section>
			<div className='overlay dismiss' onClick={handleClick}>
				<img src={clickedImage} alt='modal' />
				{/* <span className='dismiss' onClick={handleClick}>
					<RiCloseCircleLine />
				</span> */}
				<div className='overlay-arrows_left' onClick={handleRight}>
					<FiArrowLeftCircle />
				</div>
				<div className='overlay-arrows_right' onClick={handleLeft}>
					<FiArrowRightCircle />
				</div>
			</div>
		</section>
	);
};

export default Modal;
