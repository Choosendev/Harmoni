import Icon from "../Icons/Icon";

const ModalClose = ({ close }) => {
  return (
    <div onClick={close} className="justify-end flex cursor-pointer gap-2 items-center">
      <div className="m-5">
        <Icon width={19} height={14} id="close-icon" />
      </div>
    </div>
  );
};

export default ModalClose;
