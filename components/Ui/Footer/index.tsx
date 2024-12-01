const Footer = () => {
  const date = new Date();
  return (
    <footer className="w-full h-[7rem] mt-10 border-t-[1px] flex justify-center items-center text-xl">
      <div>{`Copyright ©${date.getFullYear()} ogaeng All rights reserved.`}</div>
    </footer>
  );
};

export default Footer;
