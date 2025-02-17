import reactLogo from "../../assets/react.svg";

function Footer() {
  return (
    <div className="w-full fixed bottom-0 h-40 bg-[#032541] flex justify-center items-center">
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="h-20" alt="React logo" />
      </a>
      <div className="ml-10">Phạm Huỳnh Đăng Khoa</div>
    </div>
  );
}

export default Footer;
