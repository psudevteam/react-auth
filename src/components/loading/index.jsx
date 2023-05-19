import svg from "../../assets/loading.svg";

const Loading = () => {
  return (
    <div className="w-full grid place-items-center mt-[10vw]">
      <img src={svg} alt="loading ..." />
    </div>
  );
};

export default Loading;
