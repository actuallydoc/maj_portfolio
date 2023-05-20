import React from 'react';

export default function WarningModal({ modal, setModal }: { modal: boolean, setModal: React.Dispatch<React.SetStateAction<boolean>> }) {
    const closeModal = () => {
        setModal(false);
        localStorage.setItem("modal", "true");
    };

    return (
        <>
            {modal && (
                <div className='warning-modal'>
                    <div className='warning-modal-content'>
                        <div>
                            <h1 className='warning-modal-caution'>Caution!</h1>
                        </div>
                        <div className='warning-modal-text'>
                            This webpage is not responsive and it will break on mobile devices or smaller screens.
                        </div>
                        <button className='warning-modal-button' onClick={closeModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}