const Label = (props) => {
  return (
    <>
      <label htmlFor={props.htmlFor} className="font-bold mt-5">
        {props.title}
      </label>
    </>
  );
};

export default Label;
