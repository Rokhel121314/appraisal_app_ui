import { useEffect, useState } from "react";
import SmallButton from "../SmallButton/SmallButton";
import styles from "./styles.module.css";

type PropTypes = {
  title: string;
  modal_toggle: boolean;
  detail: string;
  toggleFunction: () => void;
  cancelFunction: () => void;
  confirmFunction: () => void;
};

//CONFIRMATION MODAL
//   const [toggleUpdate, setToggleUpdate] = useState(false);

//   const handleToggleUpdate = () => {
//     setToggleUpdate((prev) => !prev);
//   };

const ConfirmationModal = ({
  title = "Confirm",
  modal_toggle = false,
  detail = "Are you sure?",
  toggleFunction,
  cancelFunction,
  confirmFunction,
}: PropTypes) => {
  //
  const [toggle, setToggle] = useState(modal_toggle);

  useEffect(() => {
    setToggle(modal_toggle);
  }, [modal_toggle]);
  return (
    <>
      {toggle && (
        <main className={styles.container}>
          <div className={styles.dialogue_box}>
            <div>
              <span className={styles.header_text}>{title.toUpperCase()}</span>
            </div>
            <div>
              <span className={styles.detail_text}>{detail}</span>
            </div>
            <div className={styles.button_container}>
              <SmallButton
                title="NO"
                icon="/logo/file.png"
                onClick={async () => {
                  await cancelFunction();
                  toggleFunction();
                }}
              />
              <SmallButton
                title="YES"
                icon="/logo/file.png"
                onClick={async () => {
                  await confirmFunction();
                  toggleFunction();
                }}
              />
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default ConfirmationModal;
