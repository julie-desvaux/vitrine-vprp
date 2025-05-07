export const Modal = ({ children, showModal, closeModal }) => {
	return (
		showModal ?? (
			<dialog onClose={() => closeModal()} onClick={() => closeModal()}>
				<div onClick={() => stopPropagation}>
					<slot name="header" />
					<hr />
					{children}
					<hr />
					<button autofocus onClick={() => closeModal()}>
						Fermer
					</button>
				</div>
			</dialog>
		)
	);
};
