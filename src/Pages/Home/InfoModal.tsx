import { useState } from "react";
import { useSelector } from "react-redux";

import { Logo } from "../../Assets/Assets";
import { JSXModal } from "../../Utils/js/Utils";
import { IApp } from "../../Store/Slices/App/AppSlice";

export const InfoModal = () => {
  const [showModal, setShowModal] = useState(false);
  const app = useSelector((state: {app: IApp}) => state.app);



  const hideModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <JSXModal
        portalRootClassName={"info-modal"}
        isShown={showModal && !app.allPagePopupForm.isHiddenPermanent }
        toggleCallback={hideModal}
      >
        <div className={"col-wrapper-24"}>
          <div className={"mb-col-24 t-col-24 d-col-15"}>
            <div className={"content"}>
              <div>
                <p className={"sub-heading t-align-center"}>
                  Admissions opened for the <strong>Year 2024-26</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </JSXModal>
    </>
  );
};
