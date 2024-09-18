import styles from "./styles.module.css";
import { Oval } from "react-loader-spinner";

const LoadingModal = ({
  status,
}: {
  status: "loading" | "idle" | "failed";
}) => {
  //

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
