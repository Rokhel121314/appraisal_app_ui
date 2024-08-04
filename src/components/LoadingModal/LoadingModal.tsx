import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Oval } from "react-loader-spinner";

//CONFIRMATION MODAL
//   const [toggleUpdate, setToggleUpdate] = useState(false);

//   const handleToggleUpdate = () => {
//     setToggleUpdate((prev) => !prev);
//   };

const LoadingModal = () => {
  //

  const status = useSelector((state: RootState) => state.gallagherSite.status);

  return (
    <>
      {status === "loading" && (
        <main className={styles.container}>
          <Oval
            height={60}
            width={60}
            color="#80000b"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#bebebe"
            strokeWidth={5}
            strokeWidthSecondary={3}
          />
        </main>
      )}
    </>
  );
};

export default LoadingModal;
